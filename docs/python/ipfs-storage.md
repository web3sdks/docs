---
slug: /ipfs-storage
title: IpfsStorage Objects
hide_title: true
displayed_sidebar: python
---

<a id="core.classes.ipfs_storage"></a>

# core.classes.ipfs_storage

<a id="core.classes.ipfs_storage.IpfsStorage"></a>

## IpfsStorage Objects

```python
class IpfsStorage(ABC)
```

Upload and download files from IPFS.

```python
from web3sdks import Web3sdksSDK

# You can customize this to a supported network or your own RPC URL
network = "mumbai"

sdk = Web3sdksSDK(network)

# Now all the IPFS functions will be available on the sdk.storage name space
sdk.storage.get("<IPFS_HASH>")
```

<a id="core.classes.ipfs_storage.IpfsStorage.get"></a>

#### get

```python
def get(hash: str) -> Any
```

Gets IPFS data at a given hash and returns the data.

**Arguments**:

- `hash`: hash of the data to get.

**Returns**:

dictionary of the data if JSON, otherwise raw data.

<a id="core.classes.ipfs_storage.IpfsStorage.get_upload_token"></a>

#### get_upload_token

```python
def get_upload_token(contract_address: str) -> str
```

Gets an upload token for a given contract address.

**Arguments**:

- `contract_address`: address of the contract to get the token for.

**Returns**:

upload token.

<a id="core.classes.ipfs_storage.IpfsStorage.upload"></a>

#### upload

```python
def upload(data: Union[TextIO, BinaryIO, str],
           contract_address: str = "",
           signer_address: str = "") -> str
```

Uploads data to IPFS and returns the hash of the data.

**Arguments**:

- `data`: data to upload.
- `contract_address`: optional address of the contract to get the token for.
- `signer_address`: optional address of the signer to get the token for.

**Returns**:

hash of the data.

<a id="core.classes.ipfs_storage.IpfsStorage.upload_batch"></a>

#### upload_batch

```python
def upload_batch(files: Sequence[Union[TextIO, BinaryIO, str, Dict[str, Any]]],
                 file_start_number: int = 0,
                 contract_address: str = "",
                 signer_address: str = "") -> str
```

Uploads a list of files to IPFS and returns the hash.

**Arguments**:

- `files`: list of files to upload.
- `file_start_number`: optional number to start the file names with.
- `contract_address`: optional address of the contract to get the token for.
- `signer_address`: optional address of the signer to get the token for.

**Returns**:

hash of the data.

<a id="core.classes.ipfs_storage.IpfsStorage.upload_metadata"></a>

#### upload_metadata

```python
def upload_metadata(metadata: Dict[str, Any],
                    contract_address: str = "",
                    signer_address: str = "") -> str
```

Uploads metadata to IPFS and returns the hash of the metadata.

**Arguments**:

- `metadata`: metadata to upload.
- `contract_address`: optional address of the contract to get the token for.
- `signer_address`: optional address of the signer to get the token for.

**Returns**:

hash of the metadata.

<a id="core.classes.ipfs_storage.IpfsStorage.upload_metadata_batch"></a>

#### upload_metadata_batch

```python
def upload_metadata_batch(metadatas: Sequence[Dict[str, Any]],
                          file_start_number: int = 0,
                          contract_address: str = "",
                          signer_address: str = "") -> UriWithMetadata
```

Uploads a list of metadata to IPFS and returns the hash.

**Arguments**:

- `metadatas`: list of metadata to upload.
- `file_start_number`: optional number to start the file names with.
- `contract_address`: optional address of the contract to get the token for.
- `signer_address`: optional address of the signer to get the token for.

**Returns**:

hash of the metadata.
