const locations = [
    { "id" : 1,
      "state_UT": "Andaman and Nicobar Islands",
      "capital": "Port Blair",
      "longitude": 92.8726,
      "latitude": 11.7401
    },
    { "id" : 2,
      "state_UT": "Andhra Pradesh",
      "capital": "Amaravati",
      "longitude": 79.4128,
      "latitude": 15.9129
    },
    { "id" : 3,
      "state_UT": "Arunachal Pradesh",
      "capital": "Itanagar",
      "longitude": 93.6167,
      "latitude": 27.0979
    },
    { "id" : 4,
      "state_UT": "Assam",
      "capital": "Dispur",
      "longitude": 91.7506,
      "latitude": 26.1433
    },
    { "id" : 5,
      "state_UT": "Bihar",
      "capital": "Patna",
      "longitude": 85.325,
      "latitude": 25.5941
    },
    { "id" : 6,
      "state_UT": "Chandigarh",
      "capital": "Chandigarh",
      "longitude": 76.7794,
      "latitude": 30.7333
    },
    { "id" : 7,
      "state_UT": "Chhattisgarh",
      "capital": "Raipur",
      "longitude": 81.6296,
      "latitude": 21.2787
    },
    { "id" : 8,
      "state_UT": "Dadra and Nagar Haveli and Daman and Diu",
      "capital": "Daman",
      "longitude": 72.8333,
      "latitude": 20.3981
    },
    { "id" : 9,
      "state_UT": "Delhi",
      "capital": "New Delhi",
      "longitude": 77.209,
      "latitude": 28.6139
    },
    { "id" : 10,
      "state_UT": "Goa",
      "capital": "Panaji",
      "longitude": 73.8278,
      "latitude": 15.2993
    },
    { "id" : 11,
      "state_UT": "Gujarat",
      "capital": "Gandhinagar",
      "longitude": 72.6369,
      "latitude": 23.2156
    },
    { "id" : 12,
      "state_UT": "Haryana",
      "capital": "Chandigarh",
      "longitude": 76.0856,
      "latitude": 29.0588
    },
    { "id" : 13,
      "state_UT": "Himachal Pradesh",
      "capital": "Shimla",
      "longitude": 77.1734,
      "latitude": 31.1048
    },
    { "id" : 14,
      "state_UT": "Jammu and Kashmir",
      "capital": "Srinagar (summer), Jammu (winter)",
      "longitude": 76.2711,
      "latitude": 33.7782
    },
    { "id" : 15,
      "state_UT": "Jharkhand",
      "capital": "Ranchi",
      "longitude": 85.3096,
      "latitude": 23.3441
    },
    { "id" : 16,
      "state_UT": "Karnataka",
      "capital": "Bengaluru",
      "longitude": 77.5946,
      "latitude": 12.9716
    },
    { "id" : 17,
      "state_UT": "Kerala",
      "capital": "Thiruvananthapuram",
      "longitude": 76.9569,
      "latitude": 8.5241
    },
    { "id" : 18,
      "state_UT": "Ladakh",
      "capital": "Leh",
      "longitude": 77.5789,
      "latitude": 34.1526
    },
    { "id" : 19,
      "state_UT": "Lakshadweep",
      "capital": "Kavaratti",
      "longitude": 72.6369,
      "latitude": 10.5667
    },
    { "id" : 20,
      "state_UT": "Madhya Pradesh",
      "capital": "Bhopal",
      "longitude": 77.4126,
      "latitude": 23.2599
    },
    { "id" : 21,
      "state_UT": "Maharashtra",
      "capital": "Mumbai",
      "longitude": 72.8777,
      "latitude": 19.076
    },
    { "id" : 22,
      "state_UT": "Manipur",
      "capital": "Imphal",
      "longitude": 93.9368,
      "latitude": 24.817
    },
    { "id" : 23,
      "state_UT": "Meghalaya",
      "capital": "Shillong",
      "longitude": 91.8825,
      "latitude": 25.5788
    },
    { "id" : 24,
      "state_UT": "Mizoram",
      "capital": "Aizawl",
      "longitude": 92.7177,
      "latitude": 23.1645
    },
    { "id" : 25,
      "state_UT": "Nagaland",
      "capital": "Kohima",
      "longitude": 94.5624,
      "latitude": 25.6751
    },
    { "id" : 26,
      "state_UT": "Odisha",
      "capital": "Bhubaneswar",
      "longitude": 85.8245,
      "latitude": 20.2961
    },
    { "id" : 27,
      "state_UT": "Puducherry",
      "capital": "Puducherry",
      "longitude": 79.8083,
      "latitude": 11.9416
    },
    { "id" : 28,
      "state_UT": "Punjab",
      "capital": "Chandigarh",
      "longitude": 75.3412,
      "latitude": 31.1471
    },
    { "id" : 29,
      "state_UT": "Rajasthan",
      "capital": "Jaipur",
      "longitude": 75.7873,
      "latitude": 26.9124
    },
    { "id" : 30,
      "state_UT": "Sikkim",
      "capital": "Gangtok",
      "longitude": 88.6138,
      "latitude": 27.3314
    },
    { "id" : 31,
      "state_UT": "Tamil Nadu",
      "capital": "Chennai",
      "longitude": 80.2707,
      "latitude": 13.0827
    },
    { "id" : 32,
      "state_UT": "Telangana",
      "capital": "Hyderabad",
      "longitude": 78.4867,
      "latitude": 17.385
    },
    { "id" : 33,
      "state_UT": "Tripura",
      "capital": "Agartala",
      "longitude": 91.9882,
      "latitude": 23.8315
    },
    { "id" : 34,
      "state_UT": "Uttar Pradesh",
      "capital": "Lucknow",
      "longitude": 80.9462,
      "latitude": 26.8467
    },
    { "id" : 35,
      "state_UT": "Uttarakhand",
      "capital": "Dehradun",
      "longitude": 78.0322,
      "latitude": 30.3165
    },
    { "id" : 36,
      "state_UT": "West Bengal",
      "capital": "Kolkata",
      "longitude": 88.3639,
      "latitude": 22.5726
    }
  ]
export {locations};  