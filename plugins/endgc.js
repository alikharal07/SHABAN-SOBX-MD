const _0x5c8e34=_0x115e;(function(_0x248462,_0x6ddd0){const _0x211dea=_0x115e,_0x1ab37f=_0x248462();while(!![]){try{const _0x200a23=-parseInt(_0x211dea(0x119))/0x1+parseInt(_0x211dea(0xff))/0x2+parseInt(_0x211dea(0x102))/0x3+-parseInt(_0x211dea(0xf2))/0x4*(-parseInt(_0x211dea(0xfb))/0x5)+-parseInt(_0x211dea(0xef))/0x6+-parseInt(_0x211dea(0x114))/0x7*(-parseInt(_0x211dea(0x100))/0x8)+parseInt(_0x211dea(0xf6))/0x9*(parseInt(_0x211dea(0xf4))/0xa);if(_0x200a23===_0x6ddd0)break;else _0x1ab37f['push'](_0x1ab37f['shift']());}catch(_0xa3cf58){_0x1ab37f['push'](_0x1ab37f['shift']());}}}(_0xa68c,0x39913));function _0xa68c(){const _0x1974a2=['\x20non-admin\x20members...','Remove\x20all\x20non-admin\x20members\x20from\x20the\x20group.','Failed\x20to\x20remove\x20','Remove\x20all\x20members\x20and\x20admins\x20from\x20the\x20group,\x20excluding\x20the\x20bot\x20and\x20bot\x20owner.','No\x20members\x20to\x20remove\x20after\x20excluding\x20the\x20bot\x20and\x20bot\x20owner.','removeall2','endgroup','An\x20error\x20occurred\x20while\x20trying\x20to\x20remove\x20admins.\x20Please\x20try\x20again.','length','split','kickadmins','There\x20are\x20no\x20non-admin\x20members\x20to\x20remove.','241031VaPAmt','Only\x20the\x20bot\x20owner\x20can\x20use\x20this\x20command.','participants','kickall2','Successfully\x20removed\x20all\x20members,\x20excluding\x20the\x20bot\x20and\x20bot\x20owner,\x20from\x20the\x20group.','446441swZtAv','Error\x20removing\x20admins:','I\x20need\x20to\x20be\x20an\x20admin\x20to\x20execute\x20this\x20command.','user','removeadmins','remove','1900344cmhjdg','includes','endgroup2','656jgMZIN','@s.whatsapp.net','17070FTiJdO','\x20members,\x20excluding\x20the\x20bot\x20and\x20bot\x20owner...','1332HVVCsK','endgc2','Successfully\x20removed\x20all\x20admin\x20members\x20from\x20the\x20group,\x20excluding\x20the\x20bot\x20and\x20bot\x20owner.','Successfully\x20removed\x20all\x20non-admin\x20members\x20from\x20the\x20group.','Starting\x20to\x20remove\x20','8315NKKGVH','deladmins','Error\x20removing\x20non-admin\x20users:','kickall3','141822wRtKoO','8fJCNEU','groupParticipantsUpdate','1104744mTgARr','kickall','error','There\x20are\x20no\x20admin\x20members\x20to\x20remove.','filter','group'];_0xa68c=function(){return _0x1974a2;};return _0xa68c();}const {cmd}=require('../command'),sleep=_0x28b89a=>new Promise(_0x3ad2ff=>setTimeout(_0x3ad2ff,_0x28b89a));function _0x115e(_0x4101b5,_0x176b9e){const _0xa68c49=_0xa68c();return _0x115e=function(_0x115ede,_0x3f7955){_0x115ede=_0x115ede-0xec;let _0x50302d=_0xa68c49[_0x115ede];return _0x50302d;},_0x115e(_0x4101b5,_0x176b9e);}cmd({'pattern':'removemembers','alias':[_0x5c8e34(0x103),'endgc',_0x5c8e34(0x10e)],'desc':_0x5c8e34(0x109),'react':'🎉','category':_0x5c8e34(0x107),'filename':__filename},async(_0x541c7c,_0x28ecd0,_0x2ebb28,{from:_0x3ec016,groupMetadata:_0x561a47,groupAdmins:_0x4abe0f,isBotAdmins:_0x119769,senderNumber:_0x112bfc,reply:_0x1cd54a,isGroup:_0x2d9dc6})=>{const _0x4fc6e0=_0x5c8e34;try{if(!_0x2d9dc6)return _0x1cd54a('This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.');const _0x5ad0e2=_0x541c7c[_0x4fc6e0(0xec)]['id'][_0x4fc6e0(0x111)](':')[0x0];if(_0x112bfc!==_0x5ad0e2)return _0x1cd54a(_0x4fc6e0(0x115));if(!_0x119769)return _0x1cd54a('I\x20need\x20to\x20be\x20an\x20admin\x20to\x20execute\x20this\x20command.');const _0x27054b=_0x561a47[_0x4fc6e0(0x116)],_0x59ce1d=_0x27054b['filter'](_0x31bd1b=>!_0x4abe0f['includes'](_0x31bd1b['id']));if(_0x59ce1d[_0x4fc6e0(0x110)]===0x0)return _0x1cd54a(_0x4fc6e0(0x113));_0x1cd54a(_0x4fc6e0(0xfa)+_0x59ce1d[_0x4fc6e0(0x110)]+_0x4fc6e0(0x108));for(let _0x58a736 of _0x59ce1d){try{await _0x541c7c[_0x4fc6e0(0x101)](_0x3ec016,[_0x58a736['id']],'remove'),await sleep(0x7d0);}catch(_0x448767){console[_0x4fc6e0(0x104)](_0x4fc6e0(0x10a)+_0x58a736['id']+':',_0x448767);}}_0x1cd54a(_0x4fc6e0(0xf9));}catch(_0x2ffa0d){console['error'](_0x4fc6e0(0xfd),_0x2ffa0d),_0x1cd54a('An\x20error\x20occurred\x20while\x20trying\x20to\x20remove\x20non-admin\x20members.\x20Please\x20try\x20again.');}}),cmd({'pattern':_0x5c8e34(0xed),'alias':[_0x5c8e34(0x112),_0x5c8e34(0xfe),_0x5c8e34(0xfc)],'desc':'Remove\x20all\x20admin\x20members\x20from\x20the\x20group,\x20excluding\x20the\x20bot\x20and\x20bot\x20owner.','react':'🎉','category':_0x5c8e34(0x107),'filename':__filename},async(_0x2c9a95,_0x3d19b1,_0x5d9806,{from:_0x49bf85,isGroup:_0x437d8e,senderNumber:_0x39ac26,groupMetadata:_0x45af2,groupAdmins:_0x59d911,isBotAdmins:_0x25f378,reply:_0x454a95})=>{const _0x3bbfba=_0x5c8e34;try{if(!_0x437d8e)return _0x454a95('This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.');const _0x86850b=_0x2c9a95[_0x3bbfba(0xec)]['id'][_0x3bbfba(0x111)](':')[0x0];if(_0x39ac26!==_0x86850b)return _0x454a95(_0x3bbfba(0x115));if(!_0x25f378)return _0x454a95(_0x3bbfba(0x11b));const _0x5251dc=_0x45af2[_0x3bbfba(0x116)],_0x3468fe=_0x5251dc['filter'](_0x6832c1=>_0x59d911[_0x3bbfba(0xf0)](_0x6832c1['id'])&&_0x6832c1['id']!==_0x2c9a95[_0x3bbfba(0xec)]['id']&&_0x6832c1['id']!==_0x86850b+_0x3bbfba(0xf3));if(_0x3468fe[_0x3bbfba(0x110)]===0x0)return _0x454a95(_0x3bbfba(0x105));_0x454a95('Starting\x20to\x20remove\x20'+_0x3468fe['length']+'\x20admin\x20members,\x20excluding\x20the\x20bot\x20and\x20bot\x20owner...');for(let _0x164699 of _0x3468fe){try{await _0x2c9a95['groupParticipantsUpdate'](_0x49bf85,[_0x164699['id']],'remove'),await sleep(0x7d0);}catch(_0x1b4051){console[_0x3bbfba(0x104)](_0x3bbfba(0x10a)+_0x164699['id']+':',_0x1b4051);}}_0x454a95(_0x3bbfba(0xf8));}catch(_0x2a5e6b){console['error'](_0x3bbfba(0x11a),_0x2a5e6b),_0x454a95(_0x3bbfba(0x10f));}}),cmd({'pattern':_0x5c8e34(0x10d),'alias':[_0x5c8e34(0x117),_0x5c8e34(0xf7),_0x5c8e34(0xf1)],'desc':_0x5c8e34(0x10b),'react':'🎉','category':_0x5c8e34(0x107),'filename':__filename},async(_0x58df9b,_0x205354,_0x4f7c7c,{from:_0xc8fca7,isGroup:_0x4daea3,senderNumber:_0x270b3f,groupMetadata:_0x5289f6,isBotAdmins:_0x1db97d,reply:_0x477905})=>{const _0x518571=_0x5c8e34;try{if(!_0x4daea3)return _0x477905('This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.');const _0x3fdab4=_0x58df9b[_0x518571(0xec)]['id'][_0x518571(0x111)](':')[0x0];if(_0x270b3f!==_0x3fdab4)return _0x477905(_0x518571(0x115));if(!_0x1db97d)return _0x477905(_0x518571(0x11b));const _0x44e3d7=_0x5289f6['participants'];if(_0x44e3d7[_0x518571(0x110)]===0x0)return _0x477905('The\x20group\x20has\x20no\x20members\x20to\x20remove.');const _0x94c1ea=_0x44e3d7[_0x518571(0x106)](_0x29a3c7=>_0x29a3c7['id']!==_0x58df9b[_0x518571(0xec)]['id']&&_0x29a3c7['id']!==_0x3fdab4+_0x518571(0xf3));if(_0x94c1ea[_0x518571(0x110)]===0x0)return _0x477905(_0x518571(0x10c));_0x477905(_0x518571(0xfa)+_0x94c1ea[_0x518571(0x110)]+_0x518571(0xf5));for(let _0x447569 of _0x94c1ea){try{await _0x58df9b[_0x518571(0x101)](_0xc8fca7,[_0x447569['id']],_0x518571(0xee)),await sleep(0x7d0);}catch(_0x2fc4ea){console[_0x518571(0x104)](_0x518571(0x10a)+_0x447569['id']+':',_0x2fc4ea);}}_0x477905(_0x518571(0x118));}catch(_0x191e55){console[_0x518571(0x104)]('Error\x20removing\x20members:',_0x191e55),_0x477905('An\x20error\x20occurred\x20while\x20trying\x20to\x20remove\x20members.\x20Please\x20try\x20again.');}});