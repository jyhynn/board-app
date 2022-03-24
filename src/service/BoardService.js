import axios from 'axios';


const BOARD_API_BASE_URL = "http://18.207.19.137:8080/api/board"; 
 
class BoardService {

    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }
}

export default new BoardService();