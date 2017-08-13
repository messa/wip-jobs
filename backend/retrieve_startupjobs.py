#!/usr/bin/env python3

import logging
from pprint import pprint
import requests
from lxml import etree
import lxml.html
from urllib.parse import urljoin


logger = logging.getLogger(__name__)


def main():
    logging.basicConfig(level=logging.INFO)
    pprint(retrieve_startupjobs_offers())


def retrieve_startupjobs_offers():
    url = 'https://www.startupjobs.cz/nabidky/15/python-programmer'
    links = retrieve_offer_links(url)
    return [retrieve_offer(link) for link in links]


def retrieve_offer_links(url):
    offer_links = []
    while url:
        logger.info('Retrieving offer links from %r', url)
        r = requests.get(url)
        r.raise_for_status()
        html = etree.HTML(r.text)
        for table in html.xpath('//table'):
            if 'offers' in table.attrib.get('class'):
                for tr in table.xpath('tbody/tr'):
                    href = tr.xpath('td/h3/a')[0].attrib['href']
                    offer_links.append(urljoin(url, href))
        next_url = None
        paginator, = html.xpath('//p[@class="paginator"]')
        for a in paginator.xpath('a'):
            if 'Další' in a.text:
                next_url = urljoin(url, a.attrib['href'])
        url = next_url
    logger.info('Total %s offer links', len(offer_links))
    return offer_links


def retrieve_offer(url):
    logger.info('Retrieving offer from %r', url)
    r = requests.get(url)
    r.raise_for_status()
    html = etree.HTML(r.text)
    location, job_type = None, None
    for item in html.xpath('//div[@class="content"]/div[@class="details center"]/div'):
        if item.xpath('i[@class="fa fa-map-marker"]'):
            location = item.xpath('span')[0].text.strip()
        if item.xpath('i[@class="fa fa-clock-o"]'):
            job_type = item.xpath('span')[0].text.strip()
    data = {
        'url': url,
        'title': html.xpath('//h1')[0].text.strip(),
        'location': location,
        'job_type': job_type,
        'description_html': to_html(html.xpath('//section[@class="description"]')[0]),
        'company_description_html': to_html(html.xpath('//div[@class="startup-info new ui-mouseover-fadein ui-mouseout-fadeout"]')[0]),
    }
    return data


def to_html(element):
    return lxml.html.tostring(element).decode()


if __name__ == '__main__':
    main()
