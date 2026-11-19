
import bcrypt from 'bcrypt';

const password = "jack@123";
const passwordcopy = "jack@123";

const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    console.log("Salt:", salt);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("Hashed Password:", hashedPassword);


    const isMatch = await bcrypt.compare("jack@123", hashedPassword);
    console.log("Password Match:", isMatch);
};

encryptPassword(password);
// encryptPassword(passwordcopy);
