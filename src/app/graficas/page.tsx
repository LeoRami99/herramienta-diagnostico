'use client'
import NavbarComponent from "../components/navbar.component"
import MyChart from "../components/radarChart"
const grafica = () => {
    
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <div className="container" style={{minHeight: 'calc(100vh - 60px)'}}>
                <div className="flex justify-center p-5 gap-5">
                    <select className="select select-bordered w-full max-w-xs shadow">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <select className="select select-bordered w-full max-w-xs shadow">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <select className="select select-bordered w-full max-w-xs shadow">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
                {/* <h1 className="text-center">Grafica</h1> */}
                <div className="flex justify-center align-middle p-5">
                    <MyChart></MyChart>
                </div>
            </div>
            
        </div>
    )
}
export default grafica