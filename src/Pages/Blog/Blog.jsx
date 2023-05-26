import { useTitle } from "../../Hooks/useTitle";


const Blog = () => {
    useTitle('Blog')
    return (
        <div className="px-20 my-20">
            <h1 className="text-5xl text-center font-bold mb-20">Questions and Answers</h1>
            <div>
                <h3 className="text-2xl font-bold mb-4">Q1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p className="mb-8 text-justify"> <span className="font-bold underline">Answer:</span> An access token is a credential that is typically short-lived and expires after a certain period and is used to authorize and authenticate API requests. A refresh token is a credential that is used to obtain a new access token when the current one expires. It is typically long-lived compared to access token. We should store them either in local storage of a browser or HTTP-only cookies. HTTP-only cookies is safer in comparison with the local storage. </p>
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-4">Q2. Compare SQL and NoSQL databases?</h3>
                <p className="mb-8 text-justify"><span className="font-bold underline">Answer:</span>SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems that differ in their data models, query languages, scalability, and schema flexibility. SQL databases are based on the relational data model. They organize data into structured tables with predefined schemas, where data is stored in rows and columns. NoSQL databases use various data models such as key-value, document, columnar, or graph. SQL databases traditionally use vertical scaling, where NoSQL databases are designed with horizontal scalability in mind. NoSQL is more flexible than SQL. Example for SQL would be MySQL and for NoSQL would be MongoDB. </p>
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-4">Q3. What is express js? What is Nest JS?</h3>
                <p className="mb-8 text-justify"><span className="font-bold underline">Answer:</span>Express.js is a minimal and flexible web application framework for Node.js. It provides a set of features and utilities for building web applications and APIs. Express.js is known for its simplicity and lightweight nature. NestJS, on the other hand, is a TypeScript-based progressive web application framework for building scalable and efficient server-side applications. It is built on top of Express.js and provides an opinionated structure and set of architectural patterns for organizing and developing Node.js applications. </p>
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-4">Q4. What is MongoDB aggregate and how does it work ?</h3>
                <p className="mb-8 text-justify"><span className="font-bold underline">Answer:</span>In MongoDB, the aggregate framework is a powerful tool for processing and analyzing data in a more advanced and flexible manner compared to basic query operations. The aggregate framework allows you to perform complex data manipulations, transformations, and aggregations on MongoDB collections.</p>
            </div>
        </div>
    );
};

export default Blog;