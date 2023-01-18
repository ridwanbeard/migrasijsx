import React from 'react'

function jsjobdetail() {

    const [jobdetail, setjobdetail] = useState([]);
    const token = document.cookie

    var myHeaders = new Headers();
    myHeaders.append("Access-Token", token);

    const fetchingData = () => {
        var myHeaders = new Headers();
        myHeaders.append("Access-Token", token);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/getjobdetailxlog/1", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        fetchingData()
    }, []);



    return (
        <div>jsjobdetail</div>
    )
}

export default jsjobdetail