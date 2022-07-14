import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker'

const VideoFooter = ({channel, description , song})=>{
    return(
        <div className={"videoFooter"}>
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className={"videoFooter__Icon"} />
                    <Ticker mode={"smooth"} >
                        {({ index }) => (
                            <>
                                <p style={{ paddingRight: "0.5em" }}>
                                    {song}
                                </p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img className={"videoFooter__record"} src="https://static.thenounproject.com/png/934821-200.png" alt=""/>
        </div>
    )
}

export default VideoFooter;