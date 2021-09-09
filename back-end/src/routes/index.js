const Routes=(app)=>{
    app.route('/')
        .get((req,res)=>{
            res.send("Hello welcome!!!!")
        })

    app.route('*')
        .get((req,res)=>{
            res.send(`No page found for ${req.originalUrl}` )
        })

}

export default Routes