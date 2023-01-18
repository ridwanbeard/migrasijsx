import React from 'react'

function empjssorting() {
    localStorage.setItem('name',"")
    localStorage.setItem('gender',"")
    localStorage.setItem('major',"")
    localStorage.setItem('education',"")

    const handleName = (e) => {
        localStorage.setItem('name', e.target.value)
    }
    const handleGender = (e) => {
        localStorage.setItem('gender', e.target.value)
    }
    const handleMajor = (e) => {
        localStorage.setItem('major', e.target.value)
    }
    const handleEducation = (e) => {
        localStorage.setItem('education', e.target.value)
    }
    
      return (
        <div>
          <section id="sectionSorting" style={{ paddingTop: "100pt" }} >
            <div className="container">
              <div className="row">
                <div className="col">
                  <div>
                    <label style={{ fontWeight: "bold", color: "#444444" }}>Jobseeker Name</label>
                    <input type="text" onChange={handleName} className="form-control" id="inputJobTitle" placeholder="" style={{ width: "225px" }} />
                  </div>
                </div>
                <div className="col">
                  <div>
                    <label style={{ fontWeight: "bold", color: "#444444" }}>Jobseeker Gender</label>
                    <input type="text" onChange={handleGender} className="form-control" id="inputCategory" placeholder="" style={{ width: "225px" }} />
                  </div>
                </div>
                <div className="col">
                  <div>
                    <label style={{ fontWeight: "bold", color: "#444444" }}>Jobseeker Education</label>
                    <input type="text" onChange={handleEducation} className="form-control" id="inputSalary" placeholder="" style={{ width: "225px" }} />
                  </div>
                </div>
                <div className="col">
                  <div>
                    <label style={{ fontWeight: "bold", color: "#444444" }}>Jobseeker Major</label>
                    <input type="text" onChange={handleMajor} className="form-control" id="inputArea" placeholder="" style={{ width: "225px" }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    }

export default empjssorting