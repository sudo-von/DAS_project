from diagrams import Diagram
from diagrams import Cluster, Diagram
from diagrams.aws.network import ELB
from diagrams.programming.framework import React
from diagrams.onprem.database import Mongodb
from diagrams.programming.language import Nodejs

with Diagram("Microservices", show=False):
    with Cluster("Service"):
        external_api = ELB("ExternalApi")
    with Cluster("Database\nMongoDB"):
        mongo = Mongodb("Contenedor-a")
    with Cluster("Service\nMongoExpress"):
        mongo_express = Nodejs("Contenedor-b")
        mongo_express >> mongo
        mongo >> mongo_express
    with Cluster("Service\nNodeJS\nScrapper"):
        scrapper = Nodejs("Contenedor-c")
        scrapper >> external_api
        external_api >> scrapper
        scrapper >> mongo
    with Cluster("Service\nNodeJS\nExpress\nAPI"):
        express_api = Nodejs("Contenedor-d")
    with Cluster("Service\nReactJS\nApacheServer"):
        react = React("Contenedor-f")
        react >> express_api
        express_api >> mongo
        mongo >> express_api
        express_api >> react
