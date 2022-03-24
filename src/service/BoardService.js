import axios from 'axios';


const BOARD_API_BASE_URL = "http://18.207.19.137:8080/api/board"; 
 
class BoardService {

    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }

    testMethod() {
        return axios.get("http://18.207.19.137:8080/api/test");
    }

    testMethod2() {
        return axios.get("http://18.207.19.137:8080/api/test2");
    }
}

export default new BoardService();