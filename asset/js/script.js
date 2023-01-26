class EngClass
{
    constructor()
    {
        this.searchBtn = document.querySelector("#search-btn")
        this.searchInput = document.querySelector("#search")

        this.students = [
            {
                name : "Zin May Htun",
                img : "asset/img/zinmayhtun.jpg",
                nickname : "ZMT",
                phone : "09799065725",
                facebook : "Zin May",
                fburl : "https://facebook.com/"
            },
            {
                name : "Wa Thone Aung",
                img : "asset/img/speducation.jpg",
                nickname : "Wa Thone",
                phone : "09696699636",
                facebook : "Wa Thone Aung",
                fburl : "https://facebook.com/wathone.aung.3597"
            },
            {
                name: "Wutt Hmone Thin",
                img : "asset/img/wutthmone.jpg",
                nickname : "WMT",
                phone : "09440263036",
                facebook : "Wutt Hmone",
                fburl : "https://facebook.com/profile.php?id=100087767780888"
            },
            {
                name: "Hnin Nwe Shar",
                img : "asset/img/hninnweshar.jpg",
                nickname : "NNS",
                phone : "09751452569",
                facebook : "Hnin Nwe Shar",
                fburl : "https://facebook.com/profile.php?id=100065187634164"
            },
            {
                name: "Thet Wai Soe",
                img : "asset/img/speducation.jpg",
                nickname : "Thet Wai Soe",
                phone : "09671775854",
                facebook : "Thet Wai Soe",
                fburl : "https://facebook.com/thet.w.soe.9461"
            },
            {
                name: "Eaindra Kyaw",
                img : "asset/img/eaindrakyaw.jpg",
                nickname : "Shwe Zin Oo",
                phone : "09751452569",
                facebook : "Shwe Zin Oo",
                fburl : "https://facebook.com/profile.png?id=100065187634164"
            },
            {
                name : "Freddy Minn",
                img : "asset/img/freddy.jpg",
                nickname : "Freddy",
                phone : "09266957979",
                facebook : "Phyo Wai Min",
                fburl : "https://facebook.com/mgphyowaimin"
            },
            {
                name : "Niky Win Chester",
                img : "asset/img/niky.jpg",
                nickname : "Niky",
                phone : "09799448742",
                facebook : "Niky Win Chester",
                fburl : "https://facebook.com/profile.php?id=100072015561421"
            },
            {
                name : "Thet Hmue Chit",
                img : "asset/img/thethmuechit.jpg",
                nickname : "TMC",
                phone : "09451059029",
                facebook : "SP Education",
                fburl : "https://facebook.com/SP-Education-868084966887176"
            },
            {
                name : "Thet Jue Chit",
                img : "asset/img/thethjuechit.jpg",
                nickname : "TJC",
                phone : "09451059029",
                facebook : "SP Education",
                fburl : "https://facebook.com/SP-Education-868084966887176"
            },
            {
                name : "Thin Thin Aung",
                img : "asset/img/thinthinaung.jpg",
                nickname : "TTA",
                phone : "09979094272",
                facebook : "SP Education",
                fburl : "https://facebook.com/SP-Education-868084966887176"
            },
            {
                name : "Hein Htet",
                img : "asset/img/speducation.jpg",
                nickname : "HH",
                phone : "097777526840",
                facebook : "Hein Htet",
                fburl : "https://facebook.com/profile.php?id=100087741926749"
            },
            {
                name : "Wai Yamon Phoo",
                img : "asset/img/waiyamonphoo.jpg",
                nickname : "WYMP",
                phone : "09421122206",
                facebook : "Wai Yamon Phoo",
                fburl : "https://facebook.com/profile.php?id=100075359192108"
            },
            {
                name : "May Kine Oo",
                img : "asset/img/waiyamonphoo.jpg",
                nickname : "MKO",
                phone : "09421122206",
                facebook : "SP Education",
                fburl : "https://facebook.com/SP-Education-868084966887176"
            },
            {
                name : "Pyae Phyo Aung",
                img : "asset/img/trwilliam.jpg",
                nickname : "William",
                phone : "09264671449",
                facebook : "SP Education",
                fburl : "https://facebook.com/SP-Education-868084966887176"
            }
        ]

        this.searchBtn.addEventListener("click",()=>
        {
            this.clickSearchBtn()
            this.searchInput.value = null
        })
        window.addEventListener("keypress",(e)=>{
            if(e.key == "Enter")
            {
                this.clickSearchBtn()
                this.searchInput.value = null
            }
        })
    }
    clickSearchBtn()
    {
        this.h2Name = document.querySelector("h1.name")
        this.imgUrl = document.querySelector("img.url")
        this.tdNickname = document.querySelector("td.nickname")
        this.tdPhone = document.querySelector("td.phone")
        this.aFaceBook = document.querySelector("a.link")
        this.aHref = document.querySelector("a.link")
        this.students.findIndex(n=>
        {
            this.search = this.searchInput.value
            if(n.name.toLocaleLowerCase() == this.search.toLowerCase() || n.nickname.toLocaleLowerCase() == this.search.toLowerCase())
            {
                this.searchInput.innerText = "";
                this.h2Name.innerText = n.name
                this.imgUrl.src = n.img
                this.tdNickname.innerText = n.nickname
                this.tdPhone.innerText = n.phone
                this.aFaceBook.innerText = n.facebook
                this.aHref.href = n.fburl
                console.log(this.tdAge)
            }
            console.log(n)
        })
    }
}
const engclass  = new EngClass()
