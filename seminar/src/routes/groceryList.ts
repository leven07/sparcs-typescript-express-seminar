import express from 'express';

const router = express.Router();

type grocery = {
    id: number,
    groceryName: string,
    quant: number
};
const groceryList: grocery[] = [];
let currentId = 0;

router.post('/addList', (req, res) => {
    try {
        const { groceryName, quant } = req.body;
        groceryList.push({ id: currentId, groceryName: groceryName, quant: quant});
        currentId ++;
    } catch (e) {
    res.status(500).json({ error: e });
  }
})

router.get('/getList', (req, res) => {
    try {
        res.json(groceryList.map(({id, groceryName, quant}) => ({
            groceryName: groceryName,
            quant: quant.toString()
        })));
      } catch (e) {
        res.status(500).json({ error: e });
      }
})

router.post('/editFeed', (req, res) => {
    try {
        const {groceryName, newQuant} = req.body;
        groceryList.forEach((grocery) => {
            if (grocery.groceryName === groceryName) {
                grocery.quant = newQuant;
            }
        });
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e })
    }
})

/*

crud

create: 


read


update


delete

*/