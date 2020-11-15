export default class HandbookService {
    getItems() {
        return {
            "employees": [
                {
                    "full_name": "Горшков Дмитрий Витальевич",
                    "position": "junior fronted developer",
                    "date_of_birth": "26.03.1999",
                    "gender": "male",
                    "fired": false,
                    "id": 1
                },
                {
                    "full_name": "Анисимова Кристина Олеговна",
                    "position": "senior backend developer",
                    "date_of_birth": "11.11.2000",
                    "gender": "female",
                    "fired": true,
                    "id": 2
                }
            ]
        };
    }
}