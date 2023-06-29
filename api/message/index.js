module.exports = async function (context, req) {
    // Student details
    const student = {
        name: "John Doe",
        age: 20,
        grade: "A"
    };

    // Respond with student details in JSON format
    context.res.json(student);
};
