export const getArticle = async()=>{
    try {
        const url = "http://localhost:3002/articles"
        const respose = await fetch(url,{
            method:"get"
        })
        return await respose.json()
    } catch (error) {
        console.log(error)
    }
}

export const addArticle = async(body)=>{
    try {
        const url = "http://localhost:3002/articles"
        const response = await fetch(url,{
            method:"post",
            body:JSON.stringify(body),
            headers:{
                "Content-Type": "application/json",
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}