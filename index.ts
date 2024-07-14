import { createMongooseConnection } from "@infra";
import { createExpressServer } from "@shared/http/express";
import express from 'express'

createMongooseConnection(
    () => createExpressServer(express())
)
