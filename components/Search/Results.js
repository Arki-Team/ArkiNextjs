import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [searchTerm, setSearchTerm] = useState(
    // location.state ? location.state.term : ""
    ""
  );
  const [Loading, setLoading] = useState(false);

  const [shouldFetch, setShouldFetch] = useState(false);
  useSWR(
    Loading
      ? ["https://arkitech-api.herokuapp.com/getJarir", searchTerm]
      : null,
    getResults,
    {
      onSuccess: (data, key, config) => {
        setLoading(false)
        setResults(data.Products);
      },
    }
  );

  const [results, setResults] = useState([]);
  
  
  
    const resultsRendered = results.map((result, i) => {
      return (
        <Col sx={12} sm={12} lg={8} key={i}>
          <ProductCard
            image={result.img_link}
            title={result.title}
            price={result.cost}
            redirectLink={result.redirectLink}
          />
        </Col>
      );



    
  }, );

  const onClick = () => {
    setShouldFetch(true);
    setLoading(true)
    console.log("clicked");
  };


  



  return (
    <div>
      <div style={{ display: "flex" }}>
        <Input
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "30%" }}
        />
        <ShowOptions />
        <Button type="primary" onClick={onClick}>
          Search
        </Button>
      </div>
      {<Row> {Loading ? <LoadingOutlined/>:resultsRendered }</Row>}
    </div>
  );
};

export default Results;
