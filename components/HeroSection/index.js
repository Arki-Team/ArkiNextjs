import React, { useState } from "react";
import Image from "next/image";
import Link from "next/Link";
import {
  Container,
  HeroTextWrapper,
  H1,
  H2,
  CompaniesImgeswrapper,
  Input,
  Button,
  SearchWrapper,
} from "./HeroElemnts";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const companies = new Array(0, 1, 2, 3, 4, 5);
  return (
    <>
      <Container>
        <HeroTextWrapper>
          <H1>Search The Product</H1>
          <H2> You Love To Buy!</H2>
          <SearchWrapper>
            <Input
              placeholder={"Search Mobile, Laptop, Accessories….."}
              style={{ width: "100%" }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <Link href="/search" passHref><Button>Search</Button></Link>
          </SearchWrapper>
        </HeroTextWrapper>
        <div>
          <Image
            alt=""
            src="/images/LandingProducts.png"
            width={500}
            height={500}
            style={{ width: "100%", maxWidth: "700px", height: "auto" }}
          ></Image>
        </div>
      </Container>

      <CompaniesImgeswrapper>
        {companies.map((comp, i) => {
          return (
            <img
              alt=""
              key={i}
              style={{ margin: "2rem 1rem" }}
              src={`/images/companies/comp${i}.png`}
            ></img>
          );
        })}
      </CompaniesImgeswrapper>
    </>
  );
};

export default HeroSection;
