import si from 'systeminformation';


async function get_cpu_infos(){
    const data = await si.cpu()
    return format_infos(data, "Processador")
}

async function get_memory_infos(){
    const data = await si.mem()
    return format_infos(data, "Memória")
}

async function get_net_infos(){
    const data = await si.networkInterfaces()
    return format_infos(data, "Rede")
}

async function get_os_infos(){
    const data = await si.osInfo()
        return format_infos(data, "Sistema Operacional")
        
}

async function get_vol_infos(){
    const data = await si.fsSize()
        return format_infos(data, "Armazenamento")
        
}

function format_infos(infosObj, infoName){
    let infoStr = infoName ? `<h1>${infoName}</h1><ul>` : '<ul>';

    for (let key in infosObj){
        if (typeof(infosObj[key]) == 'object'){
            infoStr += `<li>${key} --> ${format_infos(infosObj[key])}</li>`;
        }
        else{
            infoStr += `<li>${key} --> ${infosObj[key]}</li>`;
        }
    }

    infoStr += '</ul>';

    return infoStr;
}

export default { get_cpu_infos, get_memory_infos, get_vol_infos, get_net_infos, get_os_infos };