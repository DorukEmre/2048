SHELL	= /bin/sh

NAME	= 2048


build:
	docker compose -f docker-compose.yml up --build

stop:
	docker compose -f docker-compose.yml down

down:
	docker compose -f docker-compose.yml down


.PHONY: build 

.DEFAULT_GOAL := build