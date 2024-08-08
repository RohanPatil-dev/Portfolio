
const blogify = {
    img: ["./Images/Projects/Project_1/1.png", "./Images/Projects/Project_1/2.png", "./Images/Projects/Project_1/3.png", "./Images/Projects/Project_1/4.png", "./Images/Projects/Project_1/5.png"],
    description : "Blogify is a web application designed for creating, managing, and sharing blog posts. The platform provides a seamless experience for bloggers to craft content, engage with readers, and manage their blog effortlessly. Built using React.js for the frontend and Node.js for the backend, Blogify emphasizes a modern, responsive, and user-friendly interface.",
    key_features : [
        {
            title : "User Authentication",
            description : "Secure login and registration system, allowing users to manage their blog posts and profile."
        },
        {
            title : "Post Creation and Management",
            description : "Users can easily create, edit, and delete blog posts with a rich text editor that supports markdown, image uploads, and embedded media."
        },
        {
            title : "Commenting System",
            description : "Readers can engage with content through a commenting system, fostering community interaction."
        },
        {
            title : "Categories and Tags",
            description : "Posts can be organized by categories and tags, making content discovery easy."
        },
        {
            title : "Responsive Design",
            description : "Blogify is designed to be fully responsive, ensuring a great user experience across all devices."
        },
        {
            title : "Animations",
            description : "Smooth animations are incorporated using AOS (Animate On Scroll) to enhance the visual appeal as users navigate through the site."
        },
        {
            title : "Responsive Design",
            description : "Blogify is designed to be fully responsive, ensuring a great user experience across all devices."
        },
        {
            title : "Responsive Design",
            description : "Blogify is designed to be fully responsive, ensuring a great user experience across all devices."
        },
    ]

}

const healthcare = {
    img: ["./Images/Projects/Project_2/1.png", "./Images/Projects/Project_2/2.png", "./Images/Projects/Project_2/3.png", "./Images/Projects/Project_2/4.png", "./Images/Projects/Project_2/5.png" ,"./Images/Projects/Project_2/6.png", "./Images/Projects/Project_2/7.png","./Images/Projects/Project_2/8.png", "./Images/Projects/Project_2/9.png"],
    description : "A Healthcare Appointment Portal is a web-based or mobile application designed to streamline the process of scheduling, managing, and tracking healthcare appointments. The portal serves as a bridge between patients and healthcare providers, offering an easy-to-use interface for booking appointments, accessing medical records, and communicating with healthcare professionals.",
    key_features : [
        {
            title : "User Registration and Authentication",
            description : "Patients and healthcare providers can create and manage their accounts.Secure login options, including two-factor authentication (2FA) for enhanced security."
        },
        {
            title : "Appointment Booking",
            description : "Patients can book appointments with their preferred healthcare providers.The system offers filtering options based on date, time and type of service (e.g. specialist consultation)."
        },
        {
            title : "Search and Filter",
            description : "Patients can search for healthcare providers based on specialization, ratings, and proximity,Advanced filtering options to find the most suitable provider."
        }
    ]

}

const admin = {
    img: ["./Images/Projects/Project_3/1.png", "./Images/Projects/Project_3/2.png", "./Images/Projects/Project_3/3.png", "./Images/Projects/Project_3/4.png", "./Images/Projects/Project_3/5.png" ,"./Images/Projects/Project_3/6.png"],
    description : "An Admin Panel Portal for managing employee details is a web-based application that allows administrators to create, view, update, and manage employee records efficiently. The portal serves as a centralized system for handling employee information, ensuring that all relevant data is organized and accessible.",
    key_features : [
        {
            title : "Admin Authentication",
            description : "Secure login for administrators to access the portal.Role-based access control to ensure only authorized personnel can manage employee data."
        },
        {
            title : "Employee Profiles",
            description : "Detailed employee profiles displaying all relevant information, including personal details, job information, and history within the company.Access to uploaded documents and a timeline of updates made to the employee's record."
        },
        {
            title : "Employee Management",
            title_1 : "Create Employee",
            description_1 : "A form where the admin can input employee details such as name, email, contact number, department and more.",
           
            title_2 : "View Employees",
            description_2 : "A searchable and sortable list of all employees.",
                          
            title_3 : "Update Employee",
            description_3 : "Admin can update existing employee details, such as changing job title, department,contact information and profile image.",
                
            title_4 : "Delete Employee",
            description_4 : "Admin can remove an employee from the system if needed."
        },
    ]
}

    const comic = {
        img: ["./Images/Projects/Project_4/1.png", "./Images/Projects/Project_4/2.png", "./Images/Projects/Project_4/3.png", "./Images/Projects/Project_4/4.png", "./Images/Projects/Project_4/5.png" ,"./Images/Projects/Project_4/6.png", "./Images/Projects/Project_4/7.png","./Images/Projects/Project_4/8.png", "./Images/Projects/Project_4/9.png","./Images/Projects/Project_4/10.png", "./Images/Projects/Project_4/11.png", "./Images/Projects/Project_4/12.png" ,"./Images/Projects/Project_4/13.png", "./Images/Projects/Project_4/14.png","./Images/Projects/Project_4/15.png"],
        description : "Mighty Comic Store is an online platform dedicated to comic book enthusiasts, offering a vast collection of comics, graphic novels, and related merchandise. Whether you're a die-hard fan of superheroes, a manga aficionado, or a casual reader looking for something new, Mighty Comic Store has something for everyone. The store combines a user-friendly shopping experience with community features, making it a hub for comic lovers to discover, purchase, and discuss their favorite stories.",
        key_features : [
            {
                title : "Vast Comic Collection",
                description : "Extensive library of comics from popular publishers like Marvel, DC, Image Comics, Dark Horse, and independent creators.Categories including superheroes, science fiction, fantasy, horror, manga, and more.New releases, bestsellers, and rare editions available."
            },
            {
                title : "User Accounts and Wishlist",
                description : "Users can create accounts to manage their orders, view purchase history, and save favorite comics to their wishlist.Option to receive notifications when wishlist items are on sale or when new issues are released."
            },
            {
                title : "Responsive Design",
                description : "Fully responsive website, providing an excellent browsing experience on desktops, tablets, and smartphones."
            },
            {
                title : "Cash on Delivery (COD)",
                description : "Mighty Comic Store offers a convenient Cash on Delivery (COD) option for customers who prefer to pay for their purchases in cash upon receiving their order."
            },
            {
                title : "Order Placement",
                description : "Seamless order placement process with a user-friendly checkout interface.User can check its order and its status and admin has power to change view and change the status of user."
            }
        ]
    
        
        }
    




module.exports = {blogify,healthcare,admin,comic}