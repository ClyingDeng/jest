export default {
    get(url) {
        return new Promise((resolve, reject) => {
            if (url === '/user') {
                resolve({ name: 'dy' })
            }
            if (url === '/list') {
                resolve(['zs', 'list'])
            }
        })
    },
    post() {

    }// mockjs 假数据
}