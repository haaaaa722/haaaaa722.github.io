import "./Photos.css";
import photosData from "./photosData";

function Photos() {
    return (
        <div className='Photos'>
            <div className="category-wrapper">
                <h1>Photos</h1>
                <nav>
                    <p>category</p>
                    <ul className="category">
                        <li><button>Animals</button></li>
                        <li><button>Architecture</button></li>
                        <li><button>Attractions</button></li>
                        <li><button>Events</button></li>
                        <li><button>Flowers</button></li>
                        <li><button>Interios</button></li>
                        <li><button>Landscape</button></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Photos;