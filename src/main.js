import express from 'express';
import morgan from 'morgan';
import lib from './lib.js'


const app = express();
const port = 3000;


app.use(morgan('tiny'));

// URLs

app.get('/info/cpu', async (req, res) => {
    const cpuInfos = await lib.get_cpu_infos();
    res.send(cpuInfos);
});

app.get('/info/memory', async (req, res) => {
    const memInfos = await lib.get_memory_infos();
    res.send(memInfos);
});

app.get('/info/net', async (req, res) => {
    const netInfos = await lib.get_net_infos();
    res.send(netInfos);
});

app.get('/info/os', async (req, res) => {
    const osInfos = await lib.get_os_infos();
    res.send(osInfos);
});

app.get('/info/vol', async (req, res) => {
    const volInfos = await lib.get_vol_infos();
    res.send(volInfos);
});
//

app.listen(port, () => {
    console.log(`Server is running in port ${port}...`);
})