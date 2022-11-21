class PhotosController < ApplicationController
  def create
    @user = User.find(params[:user_id])
    if params[:photo]["image"] == nil
      flash[:alert] = "Please upload a photo"
      redirect_to :back
    else
      if params[:photo]["title"] == ""
        params[:photo]["title"] = "Default title"
      end
      @photo = Photo.create(photo_params)
      @photo.user_id = @user.id
      @photo.title = params[:photo]["title"]
      @photo.save
      flash[:notice] = "Successfully uploaded a photo"
      redirect_to user_path(@user)
    end
  end

  def new
    @user = User.find(params[:user_id])
    @photo = Photo.create()
  end

  def destroy
    @user = User.find(params["user_id"])
    if params["user_id"] == params["id"]
      Photo.find(params[:photo_id]).destroy
    end
    redirect_to :back
  end

  private
  def photo_params
    params.require(:photo).permit(:image, :title)
  end
end
