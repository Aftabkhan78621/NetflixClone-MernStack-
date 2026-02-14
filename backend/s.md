<!-- backend setup -->

Backend likne ke liye steps

1. index.js m bsic erver like app = express() then app ko link krenge
2. schema banayenge new moongoose.Schema({}) mongoose.Schema()
3. db.js bnayenge usme mongodb ko connect krenge fr us fxn ko index.js m call krenge fr mongodb connect ho jyega
4. controlls m function bna kr server logic likha
5. controllers ke logic ko router bna kr cont router = express.Router() router.route('/get).post( // component name from controllers)
6. now is router ko index.js m routes ke through acces krna h hai app.use('/api/v1/user,userRoutes)
7. api bn gai ab postman m isko test krenge ok

<!-- problems -->

1. backend bn gya mongo m data save h ogya but problem yh h ki password sidhe dikh rha h jo ki hacker hack kr skta h to hash livrary ka use krke isko sercure kr skte h  
   now register jha p user ko email password ke through access krneg wha p m bcrypt js ka use krke
   const hashpassword = await bcryptjs.hash(password,salt // mtlb jitne number m random genrate krna h wo)
   or is hashpassword ko create krnenge user ko usme dhal denge

ab new problem yh h ki hashpassword bn gy
or ab login bnayenge to login m password s checked krenge ki password hashed h ya nhi mtlb b email or password hi honge to apn ek token genrate krnege jb bcryptjs s password compre ho gya shi hoga tb to apn
jsonweb token se token genrerte krwane

const token = jwt.sign(
useId denge jo ki mongodb ki obj id hogi wo or token ka name or expire id or isko cookie me store kr denge token ko jb res.status krenge tb
)

<!-- Login error invalid expiresIn option for string payload
Aftab123 aftabkhan@example.com password123
Login error invalid expiresIn option for string payload -->

yh eerror is liye a rha tha kuki token m userid issue tha  
const token = jwt.sign(
{ userId: user.\_id }, // ✅ object payload
process.env.JWT,
{ expiresIn: "1d" }); yh likhna h confirm

new problem api invalid bt rhi jb frontend s hit kr rha tha tb backend m user create krte time success true nhi tha to uski wjh s problem create hui

or jb login or register hog tb toaster ke through msg aayeaga user login or register   
npm i react-hot-toast

new problem jb m redux  lgaya to problem yh h ki redux extension m dat nhi a rha h th to mene dispach() ka use kiya to data fr bhi nhi a rha tha kuki mene backend m user obj ko dhala nhi tha sirf mg or succes hi tha only

new problem yh ki jb m frontend s cht hu ki useSelectore s data lau to m const user = useSelector((state)=>state.user.user)
logic yh h ki phle slice.js m  name:user h initital state di or reducers bhi diye or import kr liya ab problem y p yh h ki jb m 
store.js m reducer:{user:userReducer } krung to
frontend m data lene ke liye m redux m yh 
state:{
   user:{
      reducer h to reducer m fr  s user h to m 
   }
} 
state.user.user krunga taki data mil ske



new problem yh h ki dat api s fetch krna h or banner m img m ata k hisab s img ikhni h to reux m slice bnanya movieSlice ka usme intialize kiya or reucers bnaye fr ispatch ka ue krke unko use kra

