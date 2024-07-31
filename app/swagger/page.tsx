'use client'
import SwaggerUI from "swagger-ui-react"
import spec from "@/swagger.json"
import "swagger-ui-react/swagger-ui.css"


const Page = () => {
    return (
        <SwaggerUI spec={spec}/>
    )
}

export default Page;