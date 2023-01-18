import React from 'react'

function Sorting() {
    localStorage.setItem('title',"")
    localStorage.setItem('salary',"")
    localStorage.setItem('category',"")
    localStorage.setItem('area',"")

    const handleTitle = (e) => {
        localStorage.setItem('title', e.target.value)
    }
    const handleCategory = (e) => {
        localStorage.setItem('category', e.target.value)
    }
    const handleSalary = (e) => {
        localStorage.setItem('salary', e.target.value)
    }
    const handleArea = (e) => {
        localStorage.setItem('area', e.target.value)
    }
    
  return (
    <div>
        <section id="sectionSorting" style={{paddingTop: "100pt"}} >
            <div className="container">
            <div className="row">
                <div className="col">
                <div>
                    <label style={{fontWeight: "bold", color: "#444444"}}>Job Title</label>
                    <input type="text" onChange={handleTitle} className="form-control" id="inputJobTitle" placeholder="" style={{width: "225px"}}/>
                </div>
                </div>
                <div className="col">
                <div>
                    <label style={{fontWeight: "bold", color: "#444444"}}>Category</label>
                    <input type="text" onChange={handleCategory} className="form-control" id="inputCategory" placeholder="" style={{width: "225px"}}/>
                </div>
                </div>
                <div className="col">
                <div>
                    <label style={{fontWeight: "bold", color: "#444444"}}>Salary</label>
                    <input type="text" onChange={handleSalary} className="form-control" id="inputSalary" placeholder="" style={{width: "225px"}}/>
                </div>
                </div>
                <div className="col">
                <div>
                    <label style={{fontWeight: "bold", color: "#444444"}}>Area</label>
                    <input type="text" onChange={handleArea} className="form-control" id="inputArea" placeholder="" style={{width: "225px"}}/>
                </div>
                </div>
                {/* <div className="col-1" style={{paddingTop: "17pt"}}>
                <button type="submit" className="btn btn-primary">Search</button>
                </div> */}
            </div>
            </div>
        </section>
    </div>
  )
}

export default Sorting