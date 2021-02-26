import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";import axios from "axios";
import useSWR from "swr";
import { Row, Col, Input, Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import ProductCard from "./ProductCard";
import ShowOptions from "./ShowOptions";

const getResults = async (url, searchTerm) =>
  await axios
    .post(url, { searchTerm })
    .then((res) => res.data)
    .catch((err) => err);

const Results = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(
    router.query.searchTerm ? router.query.searchTerm : ""
  );

  const [Loading, setLoading] = useState(
    router.query.searchTerm ? true : false
  );
  useSWR(
    Loading
      ? ["https://arkitech-api.herokuapp.com/getJarir", searchTerm]
      : null,
    getResults,
    {
      onSuccess: (data, key, config) => {
        setLoading(false);
        console.log(data)
        setResults({website:data.website,products:data.Products});
      },
    }
  );

  const [results, setResults] = useState({website:'', products:[]});

  const resultsRendered = results.products.map((result, i) => {
    return (
      <Col sx={12} sm={12} lg={8} key={i}>
  
          <ProductCard
          image={result.img_link}
          title={result.title}
          price={result.cost}
          redirectLink={result.redirectLink}
          website={results.website}
        />
    
    
      </Col>
    );
  });

  const onClick = () => {

    setLoading(true);
    console.log("clicked");
  };

  return (
    <div  >
      <div style={{ display: "flex", alignItems:'baseline', justifyContent:'center', width:'100%', marginBottom:'3rem' }}>
        <Input
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "40%", minWidth:'10rem',  borderRadius:'10px',padding:'0.5rem'  }}
          size='large'
        />
        <div style={{display:'flex'}} >
        <Button type="primary" onClick={onClick} size='large' style={{borderRadius:'10px',  background:'#6f72fc', border:'none', width:'5rem', fontWeight:'600', margin:'0 0.5rem 0 1rem'}} >
          Search
        </Button>
        <ShowOptions />
        </div>
  

      </div >
      {<Row justify='center' > {Loading ? (  <div style={{width:'100%', display:'flex', justifyContent:'center'}} >
    <LoadingOutlined style={{fontSize:'100px', color:'#6f72fc', marginTop:'3rem'}}  />  
     </div> ) : resultsRendered}</Row>}
  
  

    </div>
  );
};

export default Results;
