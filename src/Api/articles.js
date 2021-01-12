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