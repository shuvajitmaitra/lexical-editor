import { __asyncGenerator, __asyncValues, __await } from "tslib";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function generateReader(reader) {
    return __asyncGenerator(this, arguments, function* generateReader_1() {
        let done = false;
        while (!done) {
            const res = yield __await(reader.read());
            const { value } = res;
            if (value !== undefined) {
                yield yield __await(value);
            }
            done = res.done;
        }
    });
}
async function readBytestoString(reader) {
    var _a, e_1, _b, _c;
    const output = [];
    const chunkSize = 0x8000;
    try {
        for (var _d = true, _e = __asyncValues(generateReader(reader)), _f; _f = await _e.next(), _a = _f.done, !_a; _d = true) {
            _c = _f.value;
            _d = false;
            const value = _c;
            for (let i = 0; i < value.length; i += chunkSize) {
                output.push(String.fromCharCode(...value.subarray(i, i + chunkSize)));
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (!_d && !_a && (_b = _e.return)) await _b.call(_e);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return output.join('');
}
export async function docToHash(doc) {
    const cs = new CompressionStream('gzip');
    const writer = cs.writable.getWriter();
    const [, output] = await Promise.all([
        writer
            .write(new TextEncoder().encode(JSON.stringify(doc)))
            .then(() => writer.close()),
        readBytestoString(cs.readable.getReader()),
    ]);
    return `#doc=${btoa(output)
        .replace(/\//g, '_')
        .replace(/\+/g, '-')
        .replace(/=+$/, '')}`;
}
export async function docFromHash(hash) {
    var _a, e_2, _b, _c;
    const m = /^#doc=(.*)$/.exec(hash);
    if (!m) {
        return null;
    }
    const ds = new DecompressionStream('gzip');
    const writer = ds.writable.getWriter();
    const b64 = atob(m[1].replace(/_/g, '/').replace(/-/g, '+'));
    const array = new Uint8Array(b64.length);
    for (let i = 0; i < b64.length; i++) {
        array[i] = b64.charCodeAt(i);
    }
    const closed = writer.write(array).then(() => writer.close());
    const output = [];
    try {
        for (var _d = true, _e = __asyncValues(generateReader(ds.readable.pipeThrough(new TextDecoderStream()).getReader())), _f; _f = await _e.next(), _a = _f.done, !_a; _d = true) {
            _c = _f.value;
            _d = false;
            const chunk = _c;
            output.push(chunk);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (!_d && !_a && (_b = _e.return)) await _b.call(_e);
        }
        finally { if (e_2) throw e_2.error; }
    }
    await closed;
    return JSON.parse(output.join(''));
}
//# sourceMappingURL=doc-serialization.js.map