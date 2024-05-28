const Color = ["Red", "Green", "White", "Black"];

console.log("My Array ", Color);

const Color2 = ["Red", "Green", "White", "Black"];

console.log(Color2.join(","));
console.log(Color2.join("+"));

const Color3 = ["Red", "Green", "White", "Black"];

Color3.pop();
console.log(Color3.join(","));

const Color4 = ["Red", "Green", "White", "Black"];
console.log(Color4.shift());

const Color5 = ["Red", "Green", "White", "Black"];
console.log(Color5.slice(1, 3));

const Color6 = ["Red", "Green", "White", "Black"];

const colorPush = Color6.push("Orange");
console.log(Color6);