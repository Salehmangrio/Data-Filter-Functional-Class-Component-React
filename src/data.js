export let employees = [
    {
        id: 1,
        name: "Ahmed Khan",
        age: 28, department: "HR",
        city: "Karachi"
    },
    {
        id: 2,
        name: "Bilal Ahmed",
        age: 35, department: "Engineering",
        city: "Hyderabad"
    },
    {
        id: 3,
        name: "Usman Ali",
        age: 32, department: "Marketing",
        city: "Sukkur"
    },
    {
        id: 4,
        name: "Zain Raza",
        age: 40, department: "Finance",
        city: "Larkana"
    },
    {
        id: 5,
        name: "Ayesha Malik",
        age: 25, department: "Design",
        city: "Mirpur Khas"
    },
    {
        id: 6,
        name: "Hassan Sheikh",
        age: 45, department: "Operations",
        city: "Karachi"
    },
    {
        id: 7,
        name: "Fatima Tariq",
        age: 32, department: "Engineering",
        city: "Hyderabad"
    },
    {
        id: 8,
        name: "Hamza Butt",
        age: 29, department: "HR",
        city: "Sukkur"
    },
    {
        id: 9,
        name: "Sana Rehman",
        age: 32, department: "Finance",
        city: "Sukkur"
    },
    {
        id: 10,
        name: "Ali Shah",
        age: 32, department: "Marketing",
        city: "Mirpur Khas"
    },
    {
        id: 11,
        name: "Rabia Javed",
        age: 27, department: "HR",
        city: "Karachi"
    },
    {
        id: 12,
        name: "Tariq Mehmood",
        age: 41, department: "Engineering",
        city: "Hyderabad"
    },
    {
        id: 13,
        name: "Umar Farooq",
        age: 36, department: "Finance",
        city: "Sukkur"
    },
    {
        id: 14,
        name: "Zara Iqbal",
        age: 29, department: "Marketing",
        city: "Hyderabad"
    },
    {
        id: 15,
        name: "Noman Saeed",
        age: 38, department: "Operations",
        city: "Mirpur Khas"
    },
    {
        id: 16,
        name: "Farhan Javed",
        age: 30, department: "Design",
        city: "Karachi"
    },
    {
        id: 17,
        name: "Hafsa Riaz",
        age: 33, department: "HR",
        city: "Hyderabad"
    },
    {
        id: 18,
        name: "Shahbaz Gill",
        age: 34, department: "Engineering",
        city: "Sukkur"
    },
    {
        id: 19,
        name: "Mariam Khan",
        age: 39, department: "Finance",
        city: "Karachi"
    },
    {
        id: 20,
        name: "Talha Rafiq",
        age: 26, department: "Marketing",
        city: "Mirpur Khas"
    },
    {
        id: 21,
        name: "Irfan Malik",
        age: 37, department: "Operations",
        city: "Karachi"
    },
    {
        id: 22,
        name: "Babar Awan",
        age: 28, department: "Design",
        city: "Hyderabad"
    },
    {
        id: 23,
        name: "Sara Jameel",
        age: 40, department: "HR",
        city: "Sukkur"
    },
    {
        id: 24,
        name: "Yousuf Hanif",
        age: 35, department: "Engineering",
        city: "Sanghar"
    },
    {
        id: 25,
        name: "Mahnoor Aslam",
        age: 32, department: "Finance",
        city: "Mirpur Khas"
    },
    {
        id: 26,
        name: "Rehan Ali",
        age: 27, department: "Marketing",
        city: "Karachi"
    },
    {
        id: 27,
        name: "Saima Tariq",
        age: 42, department: "Operations",
        city: "Hyderabad"
    },
    {
        id: 28,
        name: "Kamran Siddiqui",
        age: 31, department: "Design",
        city: "Sukkur"
    },
    {
        id: 29,
        name: "Laiba Akhtar",
        age: 29, department: "HR",
        city: "Larkana"
    },
    {
        id: 30,
        name: "Naveed Anwar",
        age: 33, department: "Engineering",
        city: "Mirpur Khas"
    },
    {
        id: 31,
        name: "Haris Junaid",
        age: 30, department: "Finance",
        city: "Karachi"
    },
    {
        id: 32,
        name: "Mehwish Alam",
        age: 34, department: "Marketing",
        city: "Hyderabad"
    },
    {
        id: 33,
        name: "Shoaib Ahmed",
        age: 39, department: "Operations",
        city: "Sukkur"
    },
    {
        id: 34,
        name: "Anam Rafiq",
        age: 28, department: "Design",
        city: "Sanghar"
    },
    {
        id: 35,
        name: "Danish Qureshi",
        age: 31, department: "HR",
        city: "Mirpur Khas"
    },
    {
        id: 36,
        name: "Hiba Khan",
        age: 36, department: "Engineering",
        city: "Karachi"
    },
    {
        id: 37,
        name: "Junaid Alam",
        age: 32, department: "Finance",
        city: "Hyderabad"
    },
    {
        id: 38,
        name: "Sadia Khalid",
        age: 30, department: "Marketing",
        city: "Sukkur"
    },
    {
        id: 39,
        name: "Osman Bashir",
        age: 45, department: "Operations",
        city: "Larkana"
    },
    {
        id: 40,
        name: "Emaan Latif",
        age: 29, department: "Design",
        city: "Mirpur Khas"
    }
];

export const cities= [...new Set(employees.map(e=>e.city))]