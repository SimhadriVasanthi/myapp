export const customStyles = {
    section1background:{
        background: "linear-gradient(to bottom, #53ebe4, #044e53)",
          color: "white",
          py: { xs: 6, md: 5 },
    },
    heading:{
        fontSize: {xs:"20px",md:"30px"}, color: "#06585899" ,fontWeight:600
    },
    btn:{
        backgroundColor: "#026670",
        "&:hover": { backgroundColor: "#014f50" },
    },
    image:{
        width: "250px",
                  borderRadius: 2,
                  boxShadow: 3,
    },
    section2head:{
        fontSize:  {xs:"24px",md:"40px"}, fontWeight: "600", mb: 4, textAlign: "center" 
    },
    background:{
        background: "#e0f2f1",
        pl: {md:"0 !important"},
        paddingTop:"22px !important",
        marginTop:"24px"
    },
    section3back:{
        background:"#d2eff082",maxHeight:{md:"650px"},minHeight:{md:"600px"},justifyContent:"center",display:"flex",flexDirection:"column",
        mt:{xs:4,md:0}
    },
    section3head:{
        color: "#247d98c7",textAlign:"center",fontSize:{md:"2rem",xs:"1.5rem"},mb:3,fontWeight:600 
    },
    iconStyle:{
        fontSize:"5rem",color: "#247d98c7"
    },
    section4back:{
        justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                my: 7,
    },
    section4head:{
        fontWeight: "600", textAlign: "center", fontSize: {md:"2rem",xs:"1.5rem"}, mb: 2 
    },
    section4img:{
        gap:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"
    },
    section5head:{
        fontWeight: "600", textAlign: "center", fontSize: "2rem", mb: 2
    },
    section5back:{
        justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                my: 7,
    },
    faqs:{
        display: "flex", flexDirection: "column", gap: "10px", padding: { lg: "2rem 3rem" },my:4 
    },
    accordian:{
        border: "1px solid #14938ffa", gap: "10px", borderRadius: "6px !important", mb: 2,boxShadow:0
    },
    section1img:{
       width:{md:"200px",xs:"100px"}
    }
}
