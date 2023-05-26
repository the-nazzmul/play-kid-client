import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductCard from './productCard';

const AllProducts = () => {

    const [tabActive, setTabActive] = useState('2-4')
    const [subTabActive, setSubTabActive] = useState('Shape Sorter')


    const [products, setProducts] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [subProducts, setSubProducts] = useState([])

    useEffect(() => {
        fetch(`https://play-kid-server.vercel.app/all-products/${tabActive}`)
            .then(res => res.json())
            .then(data => {

                setProducts(data)
            })
    }, [tabActive])

    useEffect(() => {
        const uniqueArray = products.filter((item, index, self) => {
            return self.findIndex(obj => obj.sub_category === item.sub_category) === index;
        });
        setSubCategory(uniqueArray);
    }, [products])

    useEffect(() => {
        const product = products.filter(p => p.sub_category === subTabActive)
        setSubProducts(product)
    }, [subCategory, products, subTabActive])

    const handleActiveTab = (name) => {
        setTabActive(name);
    }

    const handleSubCategory = (sub_category) => {
        setSubTabActive(sub_category)
    }
    return (
        <div>
            <h1 className='text-center font-bold text-5xl my-8'>Products</h1>

            <h3 className='text-center font-semibold text-3xl my-4'>Select options to see products</h3>

            <Tabs forceRenderTabPanel >
                <TabList className='flex justify-center border-b'>
                    <Tab onClick={() => handleActiveTab('2-4')} className={`tab tab-lg tab-lifted`}>2-4</Tab>
                    <Tab onClick={() => handleActiveTab('5-8')} className={`tab tab-lg tab-lifted`}>5-8</Tab>
                    <Tab onClick={() => handleActiveTab('9-12')} className={`tab tab-lg tab-lifted`}>9-12</Tab>
                </TabList>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList className='flex justify-center border-b'>
                            {
                                subCategory.map(category => <Tab onClick={() => handleSubCategory(category.sub_category)} className={`tab tab-sm`} key={category._id}>
                                    {category.sub_category}
                                </Tab>)
                            }
                        </TabList>
                        {
                            subCategory.map(category =>
                                <TabPanel key={category._id}>
                                    {
                                        <div className='grid mx-auto lg:grid-cols-3 gap-4'>
                                            {subProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                                            }
                                        </div>
                                    }
                                </TabPanel>)
                        }
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList className='flex justify-center border-b'>
                            {
                                subCategory.map(category => <Tab onClick={() => handleSubCategory(category.sub_category)} className={`tab tab-sm`} key={category._id}>
                                    {category.sub_category}
                                </Tab>)
                            }
                        </TabList>
                        {
                            subCategory.map(category => <TabPanel key={category._id}>
                                {
                                    <div className='grid lg:grid-cols-3 gap-4'>
                                        {subProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                                        }
                                    </div>
                                }
                            </TabPanel>)
                        }
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList className='flex justify-center border-b'>
                            {
                                subCategory.map(category => <Tab onClick={() => handleSubCategory(category.sub_category)} className={`tab tab-sm`} key={category._id}>
                                    {category.sub_category}
                                </Tab>)
                            }
                        </TabList>
                        {
                            subCategory.map(category => <TabPanel key={category._id}>
                                {
                                    <div className='grid lg:grid-cols-3 gap-4'>
                                        {subProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                                        }
                                    </div>
                                }
                            </TabPanel>)
                        }
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default AllProducts;
