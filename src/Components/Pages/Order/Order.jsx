
import backgroundImage from '../../../assets/shop/banner2.jpg'
import SectionBanner from '../../Shared/SectionBenner/SectionBanner';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ItemsFilter from './ItemsFilter';
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Proveiders/AuthProviders';
import Swal from 'sweetalert2';


const Order = () => {
     const { user } = useContext(AuthContext);
     const { category } = useParams();
     const categorys = ["salad", "pizza", "soup", "dessert", "drinks"];
     const initialIndex = categorys.indexOf(category);
     const [tabIndex, setTabIndex] = useState(initialIndex);
     const navigate = useNavigate();

     const handleAddToCart = (item) => {
          if (user) {
               Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Added in cart',
                    showConfirmButton: false,
                    timer: 1500
               })
          } else {
               Swal.fire({
                    title: 'Pleaes login',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'please login!'
               }).then((result) => {
                    if (result.isConfirmed) {
                         navigate('/login')
                    }
               })
          }
     }

     return (
          <div>
               <Helmet>
                    <title>Food Order</title>
               </Helmet>
               <SectionBanner
                    backgroundImage={backgroundImage}
                    heading={"OUR SHOP"}
                    subtitle={"Would you like to try a dish?"}
               />

               <div className='w-8/12 mx-auto my-10'>
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                         <TabList>
                              {categorys.map(x => {
                                   return (
                                        <Tab key={x}>
                                             {x}
                                        </Tab>)
                              })}
                         </TabList>

                         {categorys.map(category => {
                              return <TabPanel key={category}>
                                   <ItemsFilter categoryName={category} handleAddToCart={handleAddToCart}></ItemsFilter>
                              </TabPanel>
                         })}
                    </Tabs>
               </div>
          </div>
     );
};

export default Order;