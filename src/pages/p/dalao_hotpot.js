import React, { Component } from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Carousel from "../../components/carousel";
import Section from "../../components/section";
import projectList from "./project_list";
import ProjectHeader from "../../components/project_header";
import Icon from "../../components/icon";
import Image from "../../components/image";

export default class extends Component {
    p = projectList["dalao_hotpot"];

    render() {
        return (
            <Layout>
                <SEO title="Xyzhu.me" />
                <ProjectHeader p={this.p} noReserve />
                <Carousel imgKey="dalao_carousel" style={{ height: 600 }} contentStyle={{ marginTop: 60 }}>
                    <div className="center" style={{ width: "80%" }}>
                        <Image imgKey="dalao_logo" style={{ margin: "32px" }} />
                        <h2>A restaurant ordering website powered by PHP and Bootstrap.</h2>
                    </div>
                </Carousel>
                <Section contentStyle={{ padding: 16 }}>
                    <p className="flex-row">
                        <i className="material-icons" style={{ fontSize: "2rem", marginRight: 8 }}>
                            call_merge
                        </i>
                        <span>
                            <a href="https://github.com/laurencelo">@Laurence Lo</a>,&nbsp;<a href="https://github.com/yygatech">@Ye Yao</a>&nbsp;worked with me
                            together to made this project possible.
                        </span>
                    </p>
                </Section>
                <Section contentStyle={{ padding: 64 }}>
                    <div className="flex-row" style={{ width: "100%", maxWidth: 640, alignItems: "flex-start" }}>
                        <div className="flex" style={{ width: "50%", alignItems: "flex-start" }}>
                            <h2>Front-end</h2>
                            <div className="skill-badge">
                                <Icon iconKey="js" /> JavaScript
                            </div>
                            <div className="skill-badge">
                                <Icon iconKey="jquery" /> jQuery
                            </div>
                            <div className="skill-badge">
                                <Icon iconKey="bootstrap" /> Bootstrap
                            </div>
                        </div>
                        <div className="flex" style={{ width: "50%", alignItems: "flex-start" }}>
                            <h2>Back-end</h2>
                            <div className="skill-badge">
                                <Icon iconKey="php" /> PHP
                            </div>
                            <div className="skill-badge">
                                <Icon iconKey="mysql" /> MySQL
                            </div>
                            <div className="skill-badge">
                                <Icon iconKey="apache" /> Apache HTTP Server
                            </div>
                        </div>
                    </div>
                </Section>
                <Section contentStyle={{ alignItems: "flex-start" }}>
                    <h1>Live Demo is now available!</h1>
                    <p>
                        Please forgive me that making an order will <b>NOT</b> give you a real service.
                    </p>
                </Section>
                <Section contentStyle={{ alignItems: "flex-start" }}>
                    <h1 style={{ width: "100%" }}>Description</h1>
                    <p>
                        Dalao Hotpot is a website that implements functions of making orders online. Users can search their favorite dishes in our website with
                        various filters in the left side. Once a user has decided what dishes to buy, they could click on the dishes they want to add them into
                        the cart. The user would see the dishes they selected and the price details for their order, then they could proceed to check-out. As
                        the user successfully makes an order (by clicking check-out button), the order would be recorded into the order history window at the
                        same time. The user can check all orders he/she has made by clicking “My orders” button in the drop-down list on the navigation bar.
                        Note that Dalao Hotpot also enables admin mode that certain users are authorized to edit dishes (add / delete / update) listed in the
                        main page.
                    </p>
                    <h2>Homepage</h2>
                    <p>
                        Homepage contains five sections. Header fixed on top, search bar, menu and cart as a row as main section, footer on bottom. We mainly
                        use Bootstrap to arrange the layout. What is cool is both search bar and cart can be hidden, and three sections will automatically
                        adjust to their layout respectively.
                    </p>
                    <h2>Login & Signup</h2>
                    <p>
                        Users visit our website can sign up as a user. Login and Sign up buttons are easily accessible on the right side of the header. Users
                        are required to provide username(unique), mobile(unique), email(unique), password and name. All fields are validated on both front-end
                        and server-side to protect user privacy and the server. For the password, we use SHA256 to encrypt, transmit, store and validate. Users
                        can log out by click the logout button under the drop-down menu of their user button.
                    </p>
                    <h2>Item list</h2>
                    <p>
                        Item list use grid as display layout and contain every dish in restaurant menu. It will change the column number dynamically with the
                        adjustment of width of window. Every unit of gird is an item container. We import every 12 dishes once load the page, or click the “Load
                        next page” button, as a method of paging.
                    </p>
                    <h2>Search & filter</h2>
                    <p>
                        Search and filter function are implemented on front-side. When user input the part of the dish’s name, available dish will be shown in
                        the list, leave the others hidden, just like all the filters. Filters include category, price, calorie and vegetarian ready.
                    </p>
                    <h2>Item detail</h2>
                    <p>
                        Every item will pop up a window when user click it in the list at once, no new page will be open since we think it is a waste of time.
                        Within the detail window, user can see the full description of the dish, with calorie, inventory, for vegetarian, and of course, photo.
                        User can add dish to the cart with provided quantity using the quantity buttons or input.
                    </p>

                    <h2>Admin mode (Add or edit dish)</h2>
                    <p>
                        When login as an admin (which is determined by role in database), he/she can see the add button on the homepage and edit button under
                        each dish. Both functions provide the same window, while edit dish will load the current information about this dish. Admins can change
                        name, picture, description, price, inventory, calories and availability of the dish. Notice that availability implements soft-delete in
                        our project, which means, when a dish is not available, users cannot see this dish in their menu. When a dish is zero inventory, user
                        can still see it, but cannot make an order with that dish.
                    </p>
                    <h2>Cart and Checkout</h2>
                    <p>
                        Since cart is also a section of page, user can select their dishes when see or change the cart as the same time. cart is on the server
                        side and in the database, so user can access their cart everywhere. Cart is hide by default, when click the cart button or just add a
                        dish, the cart bar will show. Every item with their quantity will show as a row in cart. User can change the quantity or delete when
                        quantity is zero by click +/- button or input a specific number. User without login cannot add dishes to cart and checkout. When at
                        least one item is in the cart, user can see the tip window and checkout button, with detail calculation of subtotal, delivery fee, tip,
                        tax and total fee. Users can adjust tip by click the button or input a specific amount. After clicking checkout, user need to provide
                        their address, and payment info, or use PayPal to pay. And users can leave message to restaurant. After clicking the confirm button,
                        front-end and server side will validate all the input to check if everything is valid, then an order will be established, and user can
                        see the result of his/her order information.
                    </p>
                    <h2>Order list</h2>
                    <p>
                        User can see the order list whenever he/she click the “My Order” button under the drop-down menu of their user button. Then their
                        history orders will pop-up as a window. She / He can see all the detail of every single order, such as order time, message, dishes,
                        subtotal, tip, delivery fee, tax and total fee.
                    </p>
                </Section>
            </Layout>
        );
    }
}
