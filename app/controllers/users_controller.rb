class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.valid?
    if !@user.is_email?
      flash[:alert] = "Input a properly formatted email."
      redirect_to :back
    elsif @user.errors.messages[:email] != nil
      flash[:notice]= "That email " + @user.errors.messages[:email].first
      redirect_to :back
    elsif @user.save
      flash[:notice]= "Signup successful. Welcome to the site!"
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      flash[:alert] = "There was a problem creating your account. Please try again."
      redirect_to :back
    end
  end

  def new
  end

  def show
    @users = User.all
    @user = User.find(params[:id])
    @links = [@user]
    Follow.where(follower: params[:id]).each do |follow|
      @links << User.find(follow[:followee])
    end
    @photos = []
    @links.each do |link|
      link.photos.each do |photo|
        @photos << photo
      end
    end
    @photos = @photos.sort.reverse
    @tag = Tag.new
    @comment = Comment.new
    @comments = Comment.all
  end

  private

    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation, :avatar)
  end


end
