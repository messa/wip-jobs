from setuptools import setup, find_packages

setup(
    name='jobs-backend',
    version='0.0.1',
    description='Backend',
    author='Petr Messner',
    author_email='petr.messner@gmail.com',
    license='MIT',
    packages=find_packages(exclude=['doc', 'tests']),
    install_requires=[
        'flask',
    ],
)
