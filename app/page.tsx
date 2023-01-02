import AesirSvg from "../components/AesirSvg";

export default function App() {
    return <div>
        <div
            id={"aesirContainer"}
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "black",
                position: "relative",
            }}
        >
            <AesirSvg multiplicator={.2}/>
            <AesirSvg multiplicator={.4}/>
            <AesirSvg multiplicator={.6}/>
            <AesirSvg multiplicator={.8}/>
            <AesirSvg multiplicator={1}/>
        </div>
        <div
            style={{
                width: "100%",
                height: "100vh",
                backgroundColor: "blue",
                position: "relative",
            }}
        >

        </div>
    </div>
}