#! /usr/bin/env bash

export $(cat .env | xargs)

export BACKEND_CORS_ORIGINS=[\"http://localhost\",\"http://localhost:8080\",\"http://localhost:3000\"]
echo $BACKEND_CORS_ORIGINS

echo Running Project .....

uvicorn app.main:app --reload