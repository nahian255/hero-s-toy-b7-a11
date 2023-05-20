import useTitle from "../../hook/useTitle";

const Bloge = () => {
    useTitle('Blogs')

    return (
        <div>

            <div className='bg-slate-100 p-2 mt-4 mb-4'>
                <h1 className='text-xl'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p>The most usefull things that is token You can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code. </p>
            </div>
            <div>
                <h1 className='text-xl'>Compare SQL and NoSQL databases?</h1>
                <p>
                    Basics difference is that two databased is storages moddel.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
            </div>
            <div className='bg-slate-100 p-2 mt-4 mb-4'>
                <h1 className='text-xl'>What is express js? What is Nest JS ?
                </h1>
                <p>Express js is used by a libreay of nose js. It's worked more easy to doing backed works.Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
            </div>
            <div>
                <h1 className='text-xl'>What is MongoDB aggregate and how does it work?
                </h1>
                <p> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            </div>
        </div>
    );
};

export default Bloge;