python3=python3
venv_dir=venv

check: $(venv_dir)/packages-installed
	test -x $(venv_dir)/bin/pytest || $(venv_dir)/bin/pip install pytest
	$(venv_dir)/bin/pytest -v --tb=native $(pytest_args) tests

venv: $(venv_dir)/packages-installed

run-flask:
	FLASK_APP=backend.api:app FLASK_DEBUG=1 $(venv_dir)/bin/flask run

$(venv_dir)/packages-installed: setup.py
	test -d $(venv_dir) || $(python3) -m venv $(venv_dir)
	$(venv_dir)/bin/pip install -U pip wheel
	$(venv_dir)/bin/pip install -e .
	touch $@
