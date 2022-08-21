
![Screenshot (1963)](https://user-images.githubusercontent.com/61643245/146307454-b6b04eec-d2bf-4036-b66a-9a690c4cd706.png)


#### Nykaa is an Indian e-commerce Mumbai-based retail seller of beauty, fashion and wellness products. The ecommerce startup lists products from over 1200 global brands along with its own line of products Nykaa Cosmetics and Nykaa Naturals.It sells beauty,wellness and fashion product across website,mobile apps and 76 offline store.

## Our Team Members ❤️

- **[Shivam Rathore](https://github.com/ShivamRathore07)**
- **[Anupam kumar](https://github.com/hlv-kakashi)**
- **[Satyajeet Sahoo](https://github.com/SatsAjeet)**
- **[Shreyansh Gupta](https://github.com/Shreyansh051)**
- **[Gaurav Kumar](https://github.com/gauravkrs)**

# Technologies we used 
* HTML5
* CSS
* JavaScript (LocalStorage, DOM, Api)
* Created local server
* Bootstrap
* MongoDB as Database
* Express , EJS for Backend



# Installing and Running

#### To run this application on your local system, execute the following commands on your terminal/command line:
#### `git clone` https://github.com/Ankit-Mishra07/NykaaCloneWithBackend.git
#### `npm i`
#### `npm run server`
#### create a .env file with username and password of mongodb

# Features
* There is login and logout functionality.
* Elegant Navbar for easy navigation between pages and products.
* Customer can view the products on product page and filter it high-price to low-price and low-price to high-price.
* Product detail page shows the selected product images and information, where customer can use Zoomer to zoom the product images.
* Customer can add the product into shopping bag by two ways one from the product page and second from the product detail page.
* Customer can add and remove the product from the whishlist.
* In product page paggination feature is available so that user can easily navigate one page to another and see the products in systematic manner.
* Payment page which calculates the products prices dynamically.
* My account page which contain purchase history and the details related to respected customer

# Steps to navigate the website:
* On the Landing Page navbar, user can click on the 'Sign In' option to either Sign In by googleOauth or Create an Account
* Once the user has logged in, they are taken back to the Landing Page.
  * User will get his name on the nav-bar and dropdown will appear which consist of section like order>profile>wallet>whishlist> and logout.
  * User can go to profile section where he ask to write the address.
* On the top nav-bar, the user can navigate to the following categories: Makeup > Skin > Hair, Appliances, Personal Care, Natural,Mom & Baby,Health & Wellness,Men,Fragrance,& LUXE to open the products page
* On the Products Page
  * Hovering on each product will display a 'Add to bag' and 'whishlist' button. 
  * Clicking on add to bag, the user will add the product to their Shopping Bag.
  * Clicking on whishlist , the user will add the product to thier whislist.
* If the user clicks on the name of the product, they'll be taken to the Produt's details page
  * On the Product's details page, the user can view all the product specifications, and also add the product to their shopping bag
* On the Shopping Bag page
  * The user can remove a product from the shopping bag
  * Change the quantity of the product
  * Apply coupoun code if any.
* On proceeding to Checkout, the user is asked to
  * Fill their address and contact details.

  * Enter their Credit/Debit card details.


* Place the Order
  * On placing the Order, Success page displays the order no. generated for the user and the shopping bag is also cleared.
  * User can see the order detail in "order" section on landing page .


# Screenshots

#### A glimpse of our website


1.Open index.html on live server(using VS code live server).

![2021-11-11 (5)](https://user-images.githubusercontent.com/61643245/141407710-c9aa55bc-6997-4cc6-81c7-1a8e18e905a2.png)

### Sign in Page:

2.This is the landing page of the clone website.
   click on the sign up on the top right to sign up.
   
![2021-11-13 (3)](https://user-images.githubusercontent.com/61643245/141608718-90305419-c33e-48a6-b55a-042adbeaa778.png)

### My Profile Page:

3.After successfully sign in user can found their email id, profile picture and mobile number and also user can add their address on My Profile Page.

![2021-11-11 (7)](https://user-images.githubusercontent.com/61643245/141608761-622cb61d-2fc2-4c67-bc39-a27d8561a4a9.png)

### Sucessfully Login Page:

4.Fill the correct email-id then user get  message on the screen sucessfully login

![2021-11-11 (8)](https://user-images.githubusercontent.com/61643245/141407751-7aec837b-d78f-4b74-9911-a31abdea26b3.png)

### Product Page:

5.In the product page we see various products on the basis of popularity and also user can filter the products on the basis of their prices and there is options to add products in cart and wishlist and if we click on particular product, the user will navigate to the product detail page.

![2021-11-11 (9)](https://user-images.githubusercontent.com/61643245/141408347-122168ca-3716-49dc-bced-11ae3113b097.png)

### Product Detail Page:

6.Here user can get the details of that selected product and user can also get magnifying image of the selected product on hovering over the product images.

![2021-11-11 (10)](https://user-images.githubusercontent.com/61643245/141407766-72a8edbd-53cd-442f-9ce0-c021b96d8a6b.png)
![2021-11-11 (11)](https://user-images.githubusercontent.com/61643245/141407777-8d8f9129-1733-49d6-9f20-66f58888af88.png)

### Wishlist Page:

7.Whenever user click on heart icon the products will get added on wishlist page. User can also remove the products from here by clicking on close button and also products can be move to the bag.

![2021-11-11 (12)](https://user-images.githubusercontent.com/61643245/141407934-f674f13f-cfc1-49b9-b02a-5b839cade800.png)

### Shopping Bag :

8.User can see all those products that he added to the bag and also user can apply the coupon code to get the discount. After clicking on proceed user will navigate to address page.

![2021-11-11 (13)](https://user-images.githubusercontent.com/61643245/141407799-3d0caf92-b944-4a9a-b3a6-7205d4f69389.png)

### Address Page:

9.Here user will get address which he added at the first time on the profile page and user can also edit their saved address. And also on the right side user can get the cart products and total price of the products.

![2021-11-11 (14)](https://user-images.githubusercontent.com/61643245/141407803-1cf170ad-685d-4eb3-a88c-143c99a7f204.png)

### Payament Page:

10.After clicking on ship to address button user redirected to payment page. Here user will get the different options for payment.

![2021-11-11 (15)](https://user-images.githubusercontent.com/61643245/141407815-b113c442-9fea-499b-9546-4179000da24f.png)

### Thank You Page:

11.After successful payment user will get notified thank message and get their order Id.

![2021-11-11 (16)](https://user-images.githubusercontent.com/61643245/141407823-faa7d8c0-283e-435c-8128-180102db0224.png)

### My Order Page :

12.After successfully placing the order we will get our ordered products information on My Order Page.

![2021-11-11 (17)](https://user-images.githubusercontent.com/61643245/141608013-55816cae-1998-4bc6-b7a9-9a1564fa473d.png)
