const {getAllRooms, bookRoom, getAllRestoMenu, deleteMenu, createMenu, getFeedback, addFeedback} = require('./util');

//get available, occupied and reserved room at admin side
test('should get all rooms', async() => {
    const text = await getAllRooms();
    expect(text.message).toBe("Rooms found successfully");
});

//book available room at admin or customer side
test('should Book Room', async() => {
    const payload = {
        "room": "40",
        "status": "occupied",
        "firstname": "Test",
        "lastname": "Case",
        "phone": "8529637410",
        "email": "demo@gmail.com",
        "check_in_date": "2022-03-10",
        "check_out_date": "2022-03-12"
    }
    const text = await bookRoom(payload);
    expect(text.message).toBe("Your room booked successfully");
});

// check out room at admin side
test('should Checkout', async() => {
    const payload = {
        "room": "6",
        "status": "available",
        "firstname": "Dhruv",
        "lastname": "Chauhan",
        "phone": "8529637410",
        "email": "demo@gmail.com",
        "check_in_date": "2022-03-10",
        "check_out_date": "2022-03-12"
    }
    const text = await bookRoom(payload);
    expect(text.message).toBe("Your room booked successfully");
});


// check in room at admin side
test('should CheckIn', async() => {
    const payload = {
        "room": "5",
        "status": "occupied",
        "firstname": "Jemin",
        "lastname": "Alagiya",
        "phone": "8529637410",
        "email": "demo@gmail.com",
        "check_in_date": "2022-03-10",
        "check_out_date": "2022-03-12"
    }
    const text = await bookRoom(payload);
    expect(text.message).toBe("Your room booked successfully");
});

// get all menu items at admin or customer side
test('should get all menu items', async() => {
    const text = await getAllRestoMenu();
    expect(text.message).toBe("Menu found successfully");
});

// remove menu items at admin side
test('should remove menu items', async() => {
    const text = await deleteMenu();
    expect(text.data.message).toBe("Delete Successfully");
});

// remove menu items at admin side
test('should add menu items', async() => {
    const payload = {
        "name": "Burger",
        "price": "10",
        "type": "lunch"
    }
    const text = await createMenu(payload);
    expect(text.message).toBe("Your menu created successfully");
});


//get all customer feedback at admin side
test('should get all customer feedback', async() => {
    const text = await getFeedback();
    expect(text.message).toBe("Feedback found successfully");
});

// add feedback at customer side
test('should add feedback ', async() => {
    const payload = {
        "name": "Test",
        "email": "test@gmail.com",
        "message": "nice food"
    }
    const text = await addFeedback(payload);
    expect(text.message).toBe("Your Feedback submited successfully");
});

