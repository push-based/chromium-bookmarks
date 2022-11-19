import {RootObject, Child} from "./types";
import * as fs from "fs";

export function createBookmarkFile(cfg: {
    bookmarkBar: { name: string, script: string }[],
    outPath: string
}): void {
    const c = (cfg: {name: string, script: string}): Child => ({
        date_added: '13313299914044308',
        date_last_used: '0',
        guid: '9bd27f0a-554d-44c4-a64d-ba7cccf97ae5',
        id: '2',
        meta_info: {
            power_bookmark_meta: ''
        },
        name: cfg.name,
        type: 'url',
        url: `javascript:(()=>{${cfg.script}})();`
    });

    const content: RootObject = {
        checksum: '92c6dd5c89c7da4a391f53cece274c6a',
        roots: {
            bookmark_bar: {
                children: cfg.bookmarkBar.map(c),
                date_added: '13313299898938408',
                date_last_used: '0',
                date_modified: '13313299914044308',
                guid: '0bc5d13f-2cba-5d74-951f-3f233fe6c908',
                id: '1',
                name: 'Lesezeichenleiste',
                type: 'folder'
            },
            other: {
                children: [],
                date_added: '13313299898938415',
                date_last_used: '0',
                date_modified: '0',
                guid: '82b081ec-3dd3-529c-8475-ab6c344590dd',
                id: '3',
                name: 'Weitere Lesezeichen',
                type: 'folder'
            },
            synced: {
                children: [],
                date_added: '13313299898938418',
                date_last_used: '0',
                date_modified: '0',
                guid: '4cf2e351-0e85-532b-bb37-df045d8f8d0f',
                id: '4',
                name: 'Mobile Lesezeichen',
                'type': 'folder'
            }
        },
        version: 1
    }

    fs.writeFileSync(cfg.outPath, JSON.stringify(content));
}
