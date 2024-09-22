import bellicon from "@/assets/bellicon.svg";
import Image from "next/image";


export default function Settings() {
  return (
    <div className="Frame4702" style={{width: '100%', height: '100%', padding: 10, background: 'white', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
    <div className="Frame4694" style={{width: 232, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
        <div className="Frame4695" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div className="UserCicrleLight" style={{width: 36, height: 36, position: 'relative'}}>
                <div className="Ellipse46" style={{width: 9, height: 9, left: 13.50, top: 10.50, position: 'absolute', borderRadius: 9999, border: '1px #222222 solid'}} />
                <div className="Ellipse47" style={{width: 27, height: 27, left: 4.50, top: 4.50, position: 'absolute', borderRadius: 9999, border: '1px #222222 solid'}} />
                <div className="Ellipse48" style={{width: 18, height: 5.56, left: 9, top: 22.50, position: 'absolute', border: '1px #222222 solid'}}></div>
            </div>
            <div className="Settings" style={{color: 'black', fontSize: 30, fontFamily: 'Rubik', fontWeight: '400', wordWrap: 'break-word'}}>Settings</div>
        </div>
        <div className="Frame4704" style={{alignSelf: 'stretch', height: 22, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, background: 'white', borderRadius: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
            <div className="Frame4703" style={{height: 24, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Frame4696" style={{width: 194, alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <Image
            src={bellicon}
            width={29}
            height={29}
            alt="notifications"
          ></Image>
                    <div className="AccountPreferences" style={{color: 'black', fontSize: 16, fontFamily: 'Rubik', fontWeight: '400', wordWrap: 'break-word'}}>Account preferences</div>
                </div>
            </div>
        </div>
        <div className="Frame4705" style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div className="Frame4697" style={{width: 171, paddingLeft: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div className="LockLight" style={{width: 24, height: 24, position: 'relative'}}>
                    <div className="Ellipse6" style={{width: 4, height: 4, left: 10, top: 13, position: 'absolute', background: '#222222', borderRadius: 9999}} />
                    <div className="Rectangle5" style={{width: 15, height: 11, left: 4.50, top: 9.50, position: 'absolute', border: '1px #222222 solid'}}></div>
                    <div className="Vector5" style={{width: 9, height: 6, left: 7.50, top: 3.50, position: 'absolute', border: '1px #222222 solid'}}></div>
                </div>
                <div className="SignSecurity" style={{color: 'black', fontSize: 16, fontFamily: 'Rubik', fontWeight: '400', wordWrap: 'break-word'}}>Sign & security</div>
            </div>
        </div>
        <div className="Frame4706" style={{height: 24, paddingLeft: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
            <div className="Frame4698" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div className="EyeLight" style={{width: 24, height: 24, position: 'relative'}}>
                    <div className="Vector132" style={{width: 20, height: 14, left: 2, top: 5, position: 'absolute', border: '1px #222222 solid'}}></div>
                    <div className="Ellipse104" style={{width: 6, height: 6, left: 9, top: 9, position: 'absolute', borderRadius: 9999, border: '1px #222222 solid'}} />
                </div>
                <div className="Visibility" style={{color: 'black', fontSize: 16, fontFamily: 'Rubik', fontWeight: '400', wordWrap: 'break-word'}}>Visibility</div>
            </div>
        </div>
        <div className="Frame4707" style={{height: 24, paddingLeft: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
            <div className="Frame4699" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div className="ChieldLight" style={{width: 24, height: 24, position: 'relative'}}>
                    <div className="Vector4" style={{width: 14, height: 17, left: 5, top: 3, position: 'absolute', border: '1px #222222 solid'}}></div>
                </div>
                <div className="DataPrivacy" style={{color: 'black', fontSize: 16, fontFamily: 'Rubik', fontWeight: '400', wordWrap: 'break-word'}}>Data privacy</div>
            </div>
        </div>
        <div className="Frame4708" style={{height: 24, paddingLeft: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
            <div className="Frame4701" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div className="BellLight" style={{width: 24, height: 24, position: 'relative'}}>
                    <div className="Rectangle1" style={{width: 18, height: 14, left: 3, top: 4, position: 'absolute', border: '1px #222222 solid'}}></div>
                    <div className="Ellipse45" style={{width: 6, height: 7, left: 15, top: 21, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', borderRadius: 9999, border: '1px #222222 solid'}} />
                </div>
                <div className="Notificaitons" style={{color: 'black', fontSize: 16, fontFamily: 'Rubik', fontWeight: '400', wordWrap: 'break-word'}}>Notificaitons</div>
            </div>
        </div>
    </div>
</div>  

  );
}
