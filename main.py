from fastapi import FastAPI, HTTPException, File, UploadFile
from pydantic import BaseModel, EmailStr
import json
import os
import uuid

app = FastAPI()


class User(BaseModel):
    name: str
    bio: str
    phone: int
    email: EmailStr
    password: str
    location: str


@app.post("/registration")
async def read_user_details(name, bio, phone, email, password, photo: UploadFile = File(...)):
    try:
        files = os.listdir('profile_data')
        location = str()
        if photo.filename in files:
            location = f'profile_data/{uuid.uuid4()}{photo.filename}'
        else:
            location = f'profile_data/{photo.filename}'

        data = {"name": name, "bio": bio, "phone": phone, "email": email, "password": password, "location": location}
        User(**data)

        with open(location, 'wb') as f:
            f.write(photo.file.read())
            f.close()

        with open('user_cred.json', 'r+') as fd:
            existing_data = json.load(fd)
            existing_data["user_details"].append(data)
            fd.seek(0)
            json.dump(existing_data, fd, indent=4)
        return {"Message": "User Added Successfully"}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=f"{e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Registration Issue!!!")


@app.get("/login")
def login(email, password):
    # TODO: Research on google authentication
    with open('user_cred.json', 'r+') as fd:
        existing_data = json.load(fd)
        for i in existing_data["user_details"]:
            if i["email"] == email and i["password"] == password:
                return {"Message": "Login Successfully"}
        raise HTTPException(status_code=401, detail="Login Error!!!")


@app.get("/profile")
def get_profile(email):
    with open('user_cred.json', 'r+') as fd:
        existing_data = json.load(fd)
        for index, i in enumerate(existing_data["user_details"]):
            if i["email"] == email:
                return {
                    "id": index,
                    "data": i
                }
        raise HTTPException(status_code=401, detail="Profile not found!!!")


@app.post("/profile")
def update_profile(id, name, bio, phone, email, password):
    try:
        with open('user_cred.json', 'r+') as fd:
            existing_data = json.load(fd)
            data = existing_data["user_details"][id]
            data["name"] = name
            data["bio"] = bio
            data["phone"] = phone
            data["email"] = email
            data["password"] = password
            return {"Message": "User Profile Updated Successfully"}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=f"{e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Profile Update Issue!!!")
