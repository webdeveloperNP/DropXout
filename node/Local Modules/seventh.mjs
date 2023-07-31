import msg from "./MultipleExports.mjs";
console.log(msg);
console.log(msg.hello);
console.log(msg.hello());//undefined in the output bcz we are consoling something which is already consoled
msg.hello();//this is correct way

//we can destruct also as:
const {hello,hi}=msg;
hello();
hi();