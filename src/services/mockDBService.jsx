import axios from "axios";

class MockService {

    static async login(data) {
        try {
            const response = axios.post('http://localhost:8000/login', {
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => console.log(data.user))
        }
        catch {
            console.log('deu ruim')
        }

        

    }

}

export default MockService